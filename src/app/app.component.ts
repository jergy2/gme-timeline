import { Component, HostListener } from '@angular/core';
import { HistoricGMEDataService } from './historic-gme-data.service';
import { ChartDataSetManager } from './chart/chart-dataset-manager.class';
import { ChartDataManagerService } from './chart/chart-data-manager-service';
import { ScreeSizeService } from './scree-size.service';
import { TimelineItem } from './timeline-items/timeline-item/timeline-item.class';
import { TimelineItemsBuilder } from './timeline-items/timeline-items-builder.class';
import { timelineItemConfigs } from './timeline-items/configs/timeline-item-configs';
import { TimelineItemsService } from './timeline-items/timeline-items.service';
import { rcTweetsConfigs } from './timeline-items/configs/rc-tweets-configs';
import { corporateEventConfigs } from './timeline-items/configs/gamestop-corporate-configs';
import { timer } from 'rxjs';
import { drsItemConfigs } from './timeline-items/configs/drs-configs';

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
    private _timelineItemsService: TimelineItemsService) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width: number = event.target.innerWidth;
    const height: number = event.target.innerHeight;
    this._sizeService.updateScreenSize(width, height);
  }

  ngOnInit() {
    timer(200).subscribe({
      next: ()=>{},
      error: ()=>{},
      complete: ()=>{
        this._dataService.loadHistoricData$().subscribe({
          next: () => { },
          error: () => { },
          complete: () => {
            const allConfigs = [
              timelineItemConfigs,
              rcTweetsConfigs,
              corporateEventConfigs,
              drsItemConfigs,
            ];
            const timelineItems: TimelineItem[] = TimelineItemsBuilder.getTimelineItems(allConfigs, this._dataService.allPriceEntries);
            this._timelineItemsService.setTimelineItems(timelineItems);
            this._timelineItemsService.updateSignificanceValue(1);
            this._updateChartData();
          },
        });
      }
    })
    
    
  }

  private _updateChartData() {
    const dataManager: ChartDataSetManager = new ChartDataSetManager(this._dataService.priceEntriesAfterCutoff, this._timelineItemsService.allTimelineItems);
    this._dataManagerService.registerDataManager(dataManager);
    this._dataIsLoaded = true;
  }

}
