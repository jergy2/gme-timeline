import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { ScreeSizeService } from 'src/app/scree-size.service';
import { ChartDataManagerService } from './chart/chart-data-manager-service';
import { DisplayService } from './display.service';
import { SettingsService } from 'src/app/settings.service';

@Component({
  selector: 'app-display-timeline',
  templateUrl: './display-timeline.component.html',
  styleUrls: ['./display-timeline.component.scss']
})
export class DisplayTimelineComponent implements OnInit{

  constructor(
    private _sizeService: ScreeSizeService, 
    private _dataManagerService: ChartDataManagerService, 
    private _displayService: DisplayService,
    private _settingsService: SettingsService){}

  public get isMobile(): boolean { return this._sizeService.isMobile}
  public get showAsList(): boolean { return this._settingsService.showAsList; }

  public get isNarrow(): boolean { return this._sizeService.screenDimensions.width < 1050; }

  ngOnInit() {
    this._sizeService.screenDimensions$.subscribe({
      next: (dimensions)=>{
        if(dimensions.width < 1050){
        }
      },
    })
  }
}
