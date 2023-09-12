import { Component } from '@angular/core';
import { ScreeSizeService } from '../scree-size.service';
import { ChartDataManagerService } from '../chart/chart-data-manager-service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor(private _sizeService: ScreeSizeService, private _dataManagerService: ChartDataManagerService) { }
  public get isMobile(): boolean { return this._sizeService.isMobile; }

  private _chartIsLoading: boolean = false;
  public get showChart(): boolean { return !this._chartIsLoading; }

  ngOnInit() {
    this._dataManagerService.isUpdating$.subscribe({
      next: (isUpdating) => {
        // console.log("isupdating", isUpdating)
        this._chartIsLoading = isUpdating
      }
    });
  }
}
