import { Component, HostListener } from '@angular/core';
import { HistoricDataService } from './historic-data.service';
import { ChartDataSetManager } from './chart/chart-dataset-manager.class';
import { EventLegendService } from './chart/event-legend/event-legend.service';
import { ScreeSizeService } from './scree-size.service';

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
    private _dataService: HistoricDataService, 
    private _sizeService: ScreeSizeService,
    private _legendService: EventLegendService) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width: number = event.target.innerWidth;
    const height: number = event.target.innerHeight;
    this._sizeService.updateScreenSize(width, height);
  }

  ngOnInit() {
    this._dataService.loadHistoricData$().subscribe({
      next: () => { },
      error: () => { },
      complete: () => {
        this._updateChartData();
      },
    });
  }

  private _updateChartData() {
    this._dataIsLoaded = true;
    const dataManager: ChartDataSetManager = new ChartDataSetManager(this._dataService.priceEntries);
    this._legendService.registerDataManager(dataManager);
  }

}
