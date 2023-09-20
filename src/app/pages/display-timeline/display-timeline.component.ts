import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { ScreeSizeService } from 'src/app/scree-size.service';
import { ChartDataManagerService } from './chart/chart-data-manager-service';
import { DisplayService } from './display.service';

@Component({
  selector: 'app-display-timeline',
  templateUrl: './display-timeline.component.html',
  styleUrls: ['./display-timeline.component.scss']
})
export class DisplayTimelineComponent implements OnInit{

  constructor(private _sizeService: ScreeSizeService, private _dataManagerService: ChartDataManagerService, private _displayService: DisplayService){}

  public get isMobile(): boolean { return this._sizeService.isMobile}
  private _chartIsLoading: boolean = false;
  public get showChart(): boolean { return !this._chartIsLoading; }
  public get showAsList(): boolean { return this._displayService.showAsList; }

  ngOnInit() {
    this._dataManagerService.isUpdating$.subscribe({
      next: (isUpdating) => {
        this._chartIsLoading = isUpdating
      }
    });
  }
}
