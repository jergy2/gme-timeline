import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ChartConfiguration, ChartDataset, ChartOptions, ScatterDataPoint, TooltipItem } from 'chart.js';
import * as dayjs from 'dayjs';
import { BaseChartDirective } from 'ng2-charts';
import { ImportGmeDataService } from 'src/app/services/import-gme-data.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { OwnershipData } from './ownership-data.class';

@Component({
  selector: 'app-ownership',
  templateUrl: './ownership.component.html',
  styleUrls: ['./ownership.component.scss']
})
export class OwnershipComponent implements OnInit {

  constructor(private _loadingService: LoadingService, private _screenService: ScreenSizeService, private titleService: Title) {
    this.titleService.setTitle('GameStop ownership (as of '+this.lastUpdated+')',);
  }

  @ViewChild(BaseChartDirective) public baseChart: BaseChartDirective | undefined;
  @HostListener('mousemove', ['$event']) onMousemove(event: MouseEvent) { }


  public get isMobile(): boolean { return this._screenService.isMobile; }
  public get isLoading(): boolean { return this._loadingService.dataIsLoading; }
  public get loadingMessage(): string { return this._loadingService.loadingMessage; }

  public get lastUpdated(): string { 
    return dayjs((new OwnershipData()).lastUpdateYYYYMMDD).format('MMMM D, YYYY')
  }

  async ngOnInit() {
    await this._loadingService.loadData$();
  }



}
