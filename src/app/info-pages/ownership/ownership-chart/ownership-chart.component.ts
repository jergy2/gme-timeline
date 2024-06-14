import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, TooltipItem } from 'chart.js';
import * as dayjs from 'dayjs';
import { ImportGmeDataService } from 'src/app/services/import-gme-data.service';
import { LoadingService } from 'src/app/services/loading.service';
import { OwnershipData } from '../ownership-data.class';

@Component({
  selector: 'app-ownership-chart',
  templateUrl: './ownership-chart.component.html',
  styleUrls: ['./ownership-chart.component.scss']
})
export class OwnershipChartComponent implements OnInit{

  constructor(private gmeService: ImportGmeDataService,private _loadingService: LoadingService, ){}

  public pieChartData: ChartConfiguration<'pie'>['data'] = { labels: [], datasets: [] };
  public pieChartOptions: ChartOptions<'pie'> = {};
  public pieChartLegend = true;

  public get tso(): number { return this.ownershipData.tso; } // updated 2024-06-11

  private _ownershipData: OwnershipData = new OwnershipData();
  public get ownershipData(): OwnershipData { return this._ownershipData; }

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
    
    this.pieChartData = this.ownershipData.chartData;
  }


  private _labelContext(context: TooltipItem<"pie">){
    return "  " + context.label;
  }

  private _titleContext(context: TooltipItem<"pie">[]){
    const item = context[0];
    const percent = Math.round((item.parsed/this.tso)*100);
    return percent + "%, " + String(Math.round(item.parsed/1000000)) + " million shares";
  }

  private _footerContext(context: TooltipItem<"pie">[]){

    const lastClosePrice = this.gmeService.lastClosePrice;
    const  marketValue = context[0].parsed * lastClosePrice / 1000000000;
    const date = dayjs(this.gmeService.allPriceEntries[this.gmeService.allPriceEntries.length-1].dateYYYYMMDD).format('MMMM D, YYYY')
    return '$' + (marketValue).toFixed(1) + " billion -- market value as of " + date;

  }

}
