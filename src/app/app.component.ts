import { Component, HostListener } from '@angular/core';
import { HistoricGMEDataService } from './historic-gme-data.service';
import { ScreeSizeService } from './scree-size.service';
import { timer } from 'rxjs';
import { DisplayService } from './pages/display-timeline/display.service';
import { timelineItemConfigs } from './pages/display-timeline/timeline-items/configs/timeline-item-configs';
import { rcTweetsConfigs } from './pages/display-timeline/timeline-items/configs/rc-events-configs';
import { corporateEventConfigs } from './pages/display-timeline/timeline-items/configs/gamestop-corporate-configs';
import { drsItemConfigs } from './pages/display-timeline/timeline-items/configs/drs-configs';
import { mediaItemConfigs } from './pages/display-timeline/timeline-items/configs/media-configs';
import { TimelineItem } from './pages/display-timeline/timeline-items/timeline-item/timeline-item.class';
import { TimelineItemsBuilder } from './pages/display-timeline/timeline-items/timeline-items-builder.class';
import { ChartDataManagerService } from './pages/display-timeline/chart/chart-data-manager-service';
import { TimelineItemsService } from './pages/display-timeline/timeline-items/timeline-items.service';
import { ChartDataSetManager } from './pages/display-timeline/chart/chart-dataset-manager.class';
import { NavigationEnd, Router } from '@angular/router';
import { SettingsService } from './settings.service';

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
    private _settingsService: SettingsService) {
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

    timer(200).subscribe({
      next: () => { },
      error: () => { },
      complete: () => {
        this._dataService.loadHistoricData$().subscribe({
          next: () => { },
          error: () => { },
          complete: () => {
            // this._displayService.setDisplay('TIMELINE');
            const allConfigs = [
              timelineItemConfigs,             
              corporateEventConfigs,
              drsItemConfigs,
              mediaItemConfigs,
              rcTweetsConfigs,
            ];
            const timelineItems: TimelineItem[] = TimelineItemsBuilder.getTimelineItems(allConfigs, this._dataService.allPriceEntries);
            this._timelineItemsService.setTimelineItems(timelineItems);
            this._timelineItemsService.updateSignificanceValue(this._settingsService.significanceValue);
            this._timelineItemsService.updateCategories(this._settingsService.categories);
            this._updateChartData();

          },
        });
      }
    });



  }

  private _updateChartData() {
    const dataManager: ChartDataSetManager = new ChartDataSetManager(this._dataService.priceEntriesAfterCutoff, this._timelineItemsService.allTimelineItems, this._settingsService.categories, this._settingsService.significanceValue);
    this._dataManagerService.registerDataManager(dataManager);
    this._dataIsLoaded = true;
  }

}
