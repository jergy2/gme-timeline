import { bbbyConfigs } from 'src/assets/event-configs/bbby-events';
import { ChartDataManagerService } from './pages/display-timeline/chart/chart-data-manager-service';
import { ChartDataSetManager } from './pages/display-timeline/chart/chart-dataset-manager.class';
import { citadelEvents } from 'src/assets/event-configs/citadel-events';
import { Component, HostListener } from '@angular/core';
import { corporateEvents } from 'src/assets/event-configs/gamestop-corporate-events';
import { DdImportService } from './services/dd-import.service';
import { drsItemEvents } from 'src/assets/event-configs/drs-events';
import { EventSearchService } from './pages/display-timeline/timeline-controls/search/event-search.service';
import { FinancialsService } from './pages/financials/financials.service';
import { HistoricGMEDataService } from './services/historic-gme-data.service';
import { lastValueFrom, timer } from 'rxjs';
import { mediaItemEvents } from 'src/assets/event-configs/media-events';
import { NavigationEnd, Router } from '@angular/router';
import { rcTweetsEvents } from 'src/assets/event-configs/rc-events-events';
import { ScreeSizeService } from './services/scree-size.service';
import { SettingsService } from './services/settings.service';
import { socialMediaEvents } from 'src/assets/event-configs/social-media-events';
import { TimelineEvent } from './pages/display-timeline/timeline-items/timeline-item/timeline-event';
import { timelineEvents } from 'src/assets/event-configs/timeline-item-events';
import { TimelineItemsBuilder } from './pages/display-timeline/timeline-items/timeline-items-builder.class';
import { TimelineItemsService } from './pages/display-timeline/timeline-items/timeline-items.service';
import { tinfoilEvents } from 'src/assets/event-configs/tinfoil-events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _dataIsLoaded: boolean = false;

  public get dataIsLoaded(): boolean { return this._dataIsLoaded; }
  public get isMobile(): boolean { return this._sizeService.isMobile; }

  constructor(
    private _gmeDataService: HistoricGMEDataService,
    private _sizeService: ScreeSizeService,
    private _dataManagerService: ChartDataManagerService,
    private _timelineItemsService: TimelineItemsService,
    private _router: Router,
    private _settingsService: SettingsService,
    private _financialsService: FinancialsService,
    private _searchService: EventSearchService,
    private _ddService: DdImportService) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width: number = event.target.innerWidth;
    const height: number = event.target.innerHeight;
    this._sizeService.updateScreenSize(width, height);
  }

  async ngOnInit() {
    this._settingsService.getSettings();

    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/') {
          this._router.navigate(['/timeline']);
        }
      }
    });
    const ddEntries = await lastValueFrom(this._ddService.loadDDItems$());
    const quarterlyResults = await lastValueFrom(this._financialsService.loadFinancialResults$());
    const priceEntries = await lastValueFrom(this._gmeDataService.loadHistoricData$())

    const allConfigs = [
      timelineEvents,
      corporateEvents,
      drsItemEvents,
      mediaItemEvents,
      rcTweetsEvents,
      socialMediaEvents,
      citadelEvents,
      bbbyConfigs,
      tinfoilEvents,
    ];
    const timelineItems: TimelineEvent[] = TimelineItemsBuilder.getTimelineItems(allConfigs, priceEntries);
    this._timelineItemsService.setAllTimelineEvents(timelineItems);
    this._searchService.setTimelineItems(timelineItems, ddEntries);
    this._timelineItemsService.updateSignificanceValue(this._settingsService.significanceValue);
    this._timelineItemsService.updateCategories(this._settingsService.categories);
    this._updateChartData();
    this._timelineItemsService.setQuarterlyFinancialResults(quarterlyResults);
  }

  private _updateChartData() {
    const dataManager: ChartDataSetManager = new ChartDataSetManager(this._gmeDataService.allPriceEntries, this._timelineItemsService.allTimelineItems, this._settingsService.categories, this._settingsService.significanceValue);
    this._dataManagerService.registerDataManager(dataManager);
    this._dataIsLoaded = true;
  }

}
