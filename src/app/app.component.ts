import { Component, HostListener } from '@angular/core';
import { HistoricGMEDataService } from './historic-gme-data.service';
import { ScreeSizeService } from './scree-size.service';
import { timer } from 'rxjs';
import { DisplayService } from './pages/display-timeline/display.service';
import { TimelineEvent } from './pages/display-timeline/timeline-items/timeline-item/timeline-event';
import { TimelineItemsBuilder } from './pages/display-timeline/timeline-items/timeline-items-builder.class';
import { ChartDataManagerService } from './pages/display-timeline/chart/chart-data-manager-service';
import { TimelineItemsService } from './pages/display-timeline/timeline-items/timeline-items.service';
import { ChartDataSetManager } from './pages/display-timeline/chart/chart-dataset-manager.class';
import { NavigationEnd, Router } from '@angular/router';
import { SettingsService } from './settings.service';
import { FinancialsService } from './pages/financials/financials.service';
import { timelineEvents } from 'src/assets/event-configs/timeline-item-events';
import { corporateEvents } from 'src/assets/event-configs/gamestop-corporate-events';
import { drsItemEvents } from 'src/assets/event-configs/drs-events';
import { mediaItemEvents } from 'src/assets/event-configs/media-events';
import { rcTweetsEvents } from 'src/assets/event-configs/rc-events-events';
import { socialMediaEvents } from 'src/assets/event-configs/social-media-events';
import { citadelEvents } from 'src/assets/event-configs/citadel-events';
import { EventSearchService } from './pages/display-timeline/timeline-controls/search/event-search.service';
import { bbbyConfigs } from 'src/assets/event-configs/bbby-events';

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
    private _dataService: HistoricGMEDataService,
    private _sizeService: ScreeSizeService,
    private _dataManagerService: ChartDataManagerService,
    private _timelineItemsService: TimelineItemsService,
    private _displayService: DisplayService,
    private _router: Router,
    private _settingsService: SettingsService,
    private _financialsService: FinancialsService,
    private _searchService: EventSearchService) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width: number = event.target.innerWidth;
    const height: number = event.target.innerHeight;
    this._sizeService.updateScreenSize(width, height);
  }

  ngOnInit() {
    this._settingsService.getSettings();
    
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/') {
          this._router.navigate(['/timeline']);
        }
      }
    });

    this._financialsService.loadFinancialResults$().subscribe({
      next: () => { },
      error: () => { },
      complete: () => {
        this._dataService.loadHistoricData$().subscribe({
          next: () => { },
          error: () => { },
          complete: () => {
            // this._displayService.setDisplay('TIMELINE');
            const allConfigs = [
              timelineEvents,           
              corporateEvents,
              drsItemEvents,
              mediaItemEvents,
              rcTweetsEvents,
              socialMediaEvents,
              citadelEvents,
              bbbyConfigs,
            ];
            const timelineItems: TimelineEvent[] = TimelineItemsBuilder.getTimelineItems(allConfigs, this._dataService.allPriceEntries);
            this._timelineItemsService.setAllTimelineEvents(timelineItems);
            this._searchService.setTimelineItems(timelineItems);
            this._timelineItemsService.updateSignificanceValue(this._settingsService.significanceValue);
            this._timelineItemsService.updateCategories(this._settingsService.categories);
            this._updateChartData();
            this._timelineItemsService.setQuarterlyFinancialResults(this._financialsService.quarterlyResults);
          },
        });
      }
    });



  }

  private _updateChartData() {
    const dataManager: ChartDataSetManager = new ChartDataSetManager(this._dataService.allPriceEntries, this._timelineItemsService.allTimelineItems, this._settingsService.categories, this._settingsService.significanceValue);
    this._dataManagerService.registerDataManager(dataManager);
    this._dataIsLoaded = true;
  }

}
