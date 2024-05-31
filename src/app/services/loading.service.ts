import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ChartDataSetManager } from '../pages/display-timeline/chart/chart-dataset-manager.class';
import { ChartDataManagerService } from '../pages/display-timeline/chart/chart-data-manager-service';
import { ImportGmeDataService } from './import-gme-data.service';
import { TimelineItemsService } from '../pages/display-timeline/timeline-items/timeline-items.service';
import { SettingsService } from './settings.service';
import { BehaviorSubject, Observable, Subject, lastValueFrom, timer } from 'rxjs';
import { DdImportService } from './dd-import.service';
import { Import10KDataService } from './import-10k-data.service';
import { ImportEventsService } from './import-events.service';
import { TimelineEventConfig } from '../pages/display-timeline/timeline-items/timeline-item/timeline-event-config.interface';
import { TimelineEvent } from '../pages/display-timeline/timeline-items/timeline-item/timeline-event.class';
import { TimelineItemsBuilder } from '../pages/display-timeline/timeline-items/timeline-items-builder.class';
import { EventSearchService } from '../pages/display-timeline/timeline-controls/search/event-search.service';
import { DdEntry } from './dd-entry.interface';
import { GmePriceEntry } from './gme-price-entry.interface';
import { EarningsResult } from '../pages/earnings/earnings-results/earnings-result.class';
import * as dayjs from 'dayjs';
import { CalendarService } from '../pages/calendar/calendar.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(
    private _dataManagerService: ChartDataManagerService,
    private _gmeDataService: ImportGmeDataService,
    private _timelineItemsService: TimelineItemsService,
    private _settingsService: SettingsService,
    private _ddService: DdImportService,
    private _import10KService: Import10KDataService,
    private _importEventsService: ImportEventsService,
    private _searchService: EventSearchService,
    private _calendarService: CalendarService
  ) { }


  private _ddEntries: DdEntry[] = [];
  private _allEventConfigs: TimelineEventConfig[] = [];
  private _priceEntries: GmePriceEntry[] = [];
  private _quarterlyResults: EarningsResult[] = [];

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

  private async _importData$() {
    this._dataIsLoading$.next(true);
    this._loadingMessage = 'Loading stuff...';
    this._ddEntries = await lastValueFrom(this._ddService.loadDDItems$());
    this._loadingMessage = 'Loading earnings data...';
    await this._loadEarnings();
    this._loadingMessage = 'Loading GME price data...';
    await this._loadGmeData();
    this._loadingMessage = 'Loading events data...';
    await this._loadEvents();
    
  }

  private async _loadEvents(){
    let needsUpdate: boolean = true;

    if(this._settingsService.eventConfigs.length > 0){
      let today = dayjs().format('YYYY-MM-DD');

      // console.log(this._settingsService.eventConfigs[0].dateYYYYMMDD)
      // console.log(this._settingsService.eventConfigs)
      if(this._settingsService.eventConfigs[0].dateYYYYMMDD <= today){
        // needsUpdate = false;
      }
    }
    if(needsUpdate){
      // console.log("Needs update")
      this._allEventConfigs = await lastValueFrom(this._importEventsService.importEventsFromGoogleSheet$());
      this._settingsService.setEventsData(this._allEventConfigs);
    }else{
      // console.log("dooes not need update")
      this._allEventConfigs = this._settingsService.eventConfigs
    }
  }

  private async _loadGmeData(){
    let needsUpdate: boolean = true;
    if(this._settingsService.gmeData.length > 0){
      const gmeData: GmePriceEntry[] = Object.assign([], this._settingsService.gmeData)
      let sorted = gmeData.sort((item1, item2) => {
        if (item1.dateYYYYMMDD > item2.dateYYYYMMDD) {


          return -1;
        } else if (item1.dateYYYYMMDD < item2.dateYYYYMMDD) {
          return 1;
        } else {
          return 0;
        }
      });
      let today = dayjs().format('YYYY-MM-DD');
      if(sorted[0].dateYYYYMMDD === today){
        needsUpdate = false;
      }
    }
    if(needsUpdate){
      this._priceEntries = await lastValueFrom(this._gmeDataService.loadGmeData$());
      this._settingsService.setGmeData(this._priceEntries);
    }else{
      this._priceEntries = this._settingsService.gmeData;
      this._gmeDataService.setGmePriceEntries(this._priceEntries);
    }
  }

  private async _loadEarnings(){
    const today: dayjs.Dayjs = dayjs();
    let earningsUpdateNeeded:boolean = true;
    const latestEarningsDateYYYYMMDD: string | null = this._settingsService.latestEarningsDateYYYYMMDD;
    if(latestEarningsDateYYYYMMDD 
      && this._settingsService.annualEarnings.length > 0 
      && this._settingsService.quarterlyEarnings.length > 0){
      if(latestEarningsDateYYYYMMDD === this._calendarService.prevEarningsDateYYYYMMDD){
        if(today.format('YYYY-MM-DD') < this._calendarService.nextEarningsDateYYYYMMDD){
          earningsUpdateNeeded = false;
        }
      }
    }
    let quarterlyResults: EarningsResult[] = [];
    let annualResults: EarningsResult[] = [];
    if(earningsUpdateNeeded){
      // with respect to dates, if earnings data update is needed, get it from the spreadsheet.
      annualResults = await lastValueFrom(this._import10KService.load10KData$());
      quarterlyResults = await lastValueFrom(this._import10KService.loadQuarterlyResults$());
      this._settingsService.setEarningsData(annualResults, quarterlyResults);
    }else{
      // otherwise, 
      annualResults = this._settingsService.annualEarnings;
      quarterlyResults = this._settingsService.quarterlyEarnings;
      this._import10KService.setQuarterlyResults(quarterlyResults);
      this._import10KService.setAnnualResults(annualResults);
    }
    this._quarterlyResults = quarterlyResults
  }


  private async _updateChartData$() {
    this._loadingMessage = 'Building chart...';
    await lastValueFrom(timer(100));
    const timelineItems: TimelineEvent[] = TimelineItemsBuilder.getTimelineItems(this._allEventConfigs, this._priceEntries);
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


}
