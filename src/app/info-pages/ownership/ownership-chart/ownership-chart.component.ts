import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartOptions, TooltipItem } from 'chart.js';
import * as dayjs from 'dayjs';
import { ImportGmeDataService } from 'src/app/services/import-gme-data.service';
import { LoadingService } from 'src/app/services/loading.service';
import { OwnershipData } from '../ownership-data.class';
import ChartDataLabels from 'chartjs-plugin-datalabels';

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
    Chart.unregister(ChartDataLabels);
    Chart.register(ChartDataLabels);
    await this._loadingService.loadData$();
    const ownershipData = this.ownershipData;
    this.pieChartOptions = {
      responsive: true,
      animation: false,
      plugins: {
        datalabels: {
          color: 'rgba(255,255,255,0.9)',
          display(context) {
            /**
             * datasetIndex, dataIndex:
             * 0, 0 - held by registered holders at Computershare
             * 0, 1 - held by Cede & Co
             * 1, 2 - DRS
             * 1, 3 - DSPP
             * 1, 4 - RC
             * 1, 5 - RK
             * 1, 6 - Vanguard
             * 1, 7 - Blackrock
             * 1, 8 - State Street
             * 1, 9 - other inst
             * 1, 10 - remainder
             * 
             */
            const value = context.dataset.data[context.dataIndex];
            if(value === 0){
              return false;
            }
            // if(context.datasetIndex === 0){
            //   return false;
            // }
            return false;
          },
          // align: 'top',
          // anchor: 'end',
          backgroundColor: 'rgba(0,0,0,0.3)',
          borderRadius: 5,


          borderColor: function (context) {
            return 'rgba(0,0,255,0.1)';
          },
          borderWidth: 1,
          formatter: function (value, context) {
            const dataValue = context.dataset.label
            const label = ownershipData.getLabel(value);
            if(context.datasetIndex === 0){
              if(context.dataIndex === 0){
                return 'Held by registered holders';
              }else if(context.dataIndex === 1){
                return 'Held by Cede & Co';
              }
            }else{
              return label;
              // return label + ': ' + (value/1000000).toFixed(1) + " M";
            }
            return '';
           
          },
          font: {
            weight: 'bold',
            size: 12,
          },
          padding: 4,

        },
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
