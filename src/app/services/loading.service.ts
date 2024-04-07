import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ChartDataSetManager } from '../pages/display-timeline/chart/chart-dataset-manager.class';
import { ChartDataManagerService } from '../pages/display-timeline/chart/chart-data-manager-service';
import { HistoricGMEDataService } from './historic-gme-data.service';
import { TimelineItemsService } from '../pages/display-timeline/timeline-items/timeline-items.service';
import { SettingsService } from './settings.service';
import { BehaviorSubject, Observable, Subject, lastValueFrom, timer } from 'rxjs';
import { DdImportService } from './dd-import.service';
import { FinancialsService } from '../pages/financials/financials.service';
import { ImportEventsService } from './import-events.service';
import { TimelineEventConfig } from '../pages/display-timeline/timeline-items/timeline-item/timeline-event-config.interface';
import { TimelineEvent } from '../pages/display-timeline/timeline-items/timeline-item/timeline-event.class';
import { TimelineItemsBuilder } from '../pages/display-timeline/timeline-items/timeline-items-builder.class';
import { EventSearchService } from '../pages/display-timeline/timeline-controls/search/event-search.service';
import { DdEntry } from './dd-entry.interface';
import { GmePriceEntry } from './gme-price-entry.interface';
import { QuarterlyResult } from '../pages/financials/quarterly-results/quarterly-result.class';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(
    private _dataManagerService: ChartDataManagerService,
    private _gmeDataService: HistoricGMEDataService,
    private _timelineItemsService: TimelineItemsService,
    private _settingsService: SettingsService,
    private _ddService: DdImportService,
    private _financialsService: FinancialsService,
    private _importEventsService: ImportEventsService,
    private _searchService: EventSearchService,
  ) { }


  private _ddEntries: DdEntry[] = [];
  private _allConfigs: TimelineEventConfig[] = [];
  private _priceEntries: GmePriceEntry[] = [];
  private _quarterlyResults: QuarterlyResult[] = [];

  private _dataIsLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _loadingMessage: string = '';
  public get dataIsLoading(): boolean { return this._dataIsLoading$.getValue(); }
  public get dataIsLoading$(): Observable<boolean> { return this._dataIsLoading$.asObservable(); }
  public get loadingMessage(): string { return this._loadingMessage; }

  public set loadingMessage(loadingMessage: string) { this._loadingMessage = loadingMessage;}
  public beginLoading(){ this._dataIsLoading$.next(true); }

  private _allDataImported: boolean = false;

  public async loadData$() {
    if (this._allDataImported === false) {
      await this._importData$();
      await this._updateChartData$();
    }
    this._dataIsLoading$.next(false);
  }

  private async _updateChartData$() {
    this._loadingMessage = 'Building chart...';
    await lastValueFrom(timer(100));
    const timelineItems: TimelineEvent[] = TimelineItemsBuilder.getTimelineItems(this._allConfigs, this._priceEntries);
    this._timelineItemsService.setAllTimelineEvents(timelineItems);
    this._searchService.setTimelineItems(timelineItems, this._ddEntries);
    this._timelineItemsService.updateSignificanceValue(this._settingsService.significanceValue);
    this._timelineItemsService.updateCategories(this._settingsService.categories);
    const dataManager: ChartDataSetManager = new ChartDataSetManager(this._gmeDataService.allPriceEntries, this._timelineItemsService.allTimelineItems, this._settingsService.categories, this._settingsService.significanceValue);
    this._dataManagerService.setDataManager(dataManager);
    this._timelineItemsService.setQuarterlyFinancialResults(this._quarterlyResults);
    this._loadingMessage = '';
    this._allDataImported = true;
  }

  private async _importData$() {
    this._dataIsLoading$.next(true);
    this._loadingMessage = 'Loading stuff...';
    this._ddEntries = await lastValueFrom(this._ddService.loadDDItems$());
    this._loadingMessage = 'Loading earnings data...';
    this._quarterlyResults = await lastValueFrom(this._financialsService.loadFinancialResults$());
    this._loadingMessage = 'Loading GME price data...';
    this._priceEntries = await lastValueFrom(this._gmeDataService.loadGmeData$());
    this._loadingMessage = 'Loading events data...';
    this._allConfigs = await lastValueFrom(this._importEventsService.importEventsFromGoogleSheet$());
  }



}
