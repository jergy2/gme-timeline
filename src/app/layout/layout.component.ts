import { Component } from '@angular/core';
import { ScreenSizeService } from '../services/screen-size.service';
import { DisplayService } from '../pages/display-timeline/display.service';
import { ChartDataManagerService } from '../pages/display-timeline/chart/chart-data-manager-service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor(private _sizeService: ScreenSizeService, private _dataManagerService: ChartDataManagerService, private _displayService: DisplayService) { }
  public get isMobile(): boolean { return this._sizeService.isMobile; }


  // public get displayIsTimeline(): boolean { return this._displayService.displayIsTimeline; }
  // public get displayIsFinancials(): boolean { return this._displayService.displayIsFinancials; }
  


}
