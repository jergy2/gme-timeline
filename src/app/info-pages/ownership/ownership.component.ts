import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ChartConfiguration, ChartDataset, ChartOptions, ScatterDataPoint, TooltipItem } from 'chart.js';
import * as dayjs from 'dayjs';
import { BaseChartDirective } from 'ng2-charts';
import { ImportGmeDataService } from 'src/app/services/import-gme-data.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';

@Component({
  selector: 'app-ownership',
  templateUrl: './ownership.component.html',
  styleUrls: ['./ownership.component.scss']
})
export class OwnershipComponent implements OnInit {

  constructor(private _loadingService: LoadingService, private _screenService: ScreenSizeService, private titleService: Title, private gmeService: ImportGmeDataService){
    this.titleService.setTitle('GameStop ownership (May 2024)',);
  }

  @ViewChild(BaseChartDirective) public baseChart: BaseChartDirective | undefined;
  @HostListener('mousemove', ['$event']) onMousemove(event: MouseEvent) { }

  public pieChartData: ChartConfiguration<'pie'>['data'] = { labels: [], datasets: [] };
  public pieChartOptions: ChartOptions<'pie'> = {};
  public pieChartLegend = true;

  public get isMobile(): boolean { return this._screenService.isMobile;}
  
  public get isLoading(): boolean { return this._loadingService.dataIsLoading; }
  public get loadingMessage(): string { return this._loadingService.loadingMessage; }

  async ngOnInit() {
    await this._loadingService.loadData$();
    
    this.pieChartOptions = {
      responsive: true,
      animation: false,
      plugins: {
        legend: {
          onClick: (event, array) => {
          },
          position: 'bottom',
        },
        tooltip: {
          // backgroundColor: (context) => {
          //   if (context.tooltipItems.length > 0) {
          //     this._getTooltipBackgroundColor(context.tooltipItems[0])
          //   }
          //   return this._tooltipBackgroundColor;
          // },
          borderColor: 'black',
          borderWidth: 1,
          // displayColors: false,
          bodyFont: {
            size: 16,
            weight: 'bold',
          },
          titleFont: {
            weight: 'normal',
          },
          footerFont: {
            weight: 'normal',
          },
          callbacks: {
            label: (context) => { return this._labelContext(context) },
            footer: (context) => { return this._footerContext(context) },
            title: (context) => { return this._titleContext(context) }
          },
        },
      },
      
    }
    const data = {
      labels: [
        'Held by registered holders at Computershare', 
        'Held by Cede & Co on behalf of DTCC', 
        'DRS', 
        'DSPP', 
        'Insiders', 
        'Institutions', 
        'Remainder',
      ],
      datasets: [
        {
          backgroundColor: ['#8f1795','#CCC','#8f1795', '#a91cb0','#0066ff', '#ff9900','#EEE'],
          data: [75300000,275600000,0,0,0,0,0,0,0]
        },
        {
          backgroundColor: ['#CCC','#CCC','#8f1795', '#a91cb0','#0066ff', '#ff9900','#EEE'],
          data: [0,0,53300000,22000000,39000000,89000000,147700000]
        },
        {
          backgroundColor: ['hsl(0, 100%, 60%)', 'hsl(0, 100%, 35%)'],
          data: [0, 0]
        },        {
          backgroundColor: ['hsl(0, 100%, 60%)', 'hsl(0, 100%, 35%)'],
          data: [0, 0]
        },        {
          backgroundColor: ['hsl(0, 100%, 60%)', 'hsl(0, 100%, 35%)'],
          data: [0, 0]
        },       
      ]
    };
    this.pieChartData = data;
  }

  private _labelContext(context: TooltipItem<"pie">){
    return "  " + context.label;
  }

  private _titleContext(context: TooltipItem<"pie">[]){
    const item = context[0];
    const totalShares = 350900000;
    const percent = Math.round((item.parsed/totalShares)*100);
    return percent + "%, " + String(Math.round(item.parsed/1000000)) + " million shares";
  }

  private _footerContext(context: TooltipItem<"pie">[]){

    const lastClosePrice = this.gmeService.lastClosePrice;
    const  marketValue = context[0].parsed * lastClosePrice / 1000000000;
    const date = dayjs(this.gmeService.allPriceEntries[this.gmeService.allPriceEntries.length-1].dateYYYYMMDD).format('MMMM D, YYYY')
    return '$' + (marketValue).toFixed(1) + " billion -- market value as of " + date;

  }

}
