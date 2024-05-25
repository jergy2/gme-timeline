import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartOptions, ScatterDataPoint } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-ownership',
  templateUrl: './ownership.component.html',
  styleUrls: ['./ownership.component.scss']
})
export class OwnershipComponent implements OnInit {


  @ViewChild(BaseChartDirective) public baseChart: BaseChartDirective | undefined;
  @HostListener('mousemove', ['$event']) onMousemove(event: MouseEvent) { }

  public pieChartData: ChartConfiguration<'pie'>['data'] = { labels: [], datasets: [] };
  public pieChartOptions: ChartOptions<'pie'> = {};
  public pieChartLegend = true;

  ngOnInit() {
    this.pieChartOptions = {
      responsive: true,
      animation: false,
      plugins: {
        legend: {
          onClick: (event, array) => {
          },
          position: 'bottom',
        }
      },
      
    }
    const data = {
      labels: [
        'Held by registered holders at Computershare', 
        'Held by Cede & Co on behalf of DTC', 
        'DRS', 
        'DSPP', 
        'Insiders', 
        'Institutions', 
        'Mutual Funds', 
        'ETFs',
        'Remaining',

      ],
      datasets: [
        {
          backgroundColor: ['#8f1795','#CCC','#8f1795', '#a91cb0','#0066ff', '#ff9900','#ffcc00','#ffcc66','#EEE'],
          data: [75000000,275000000,0,0,0,0,0,0,0]
        },

        {
          backgroundColor: ['#CCC','#CCC','#8f1795', '#a91cb0','#0066ff', '#ff9900','#ffcc00','#ffcc66','#EEE'],
          data: [0,0,53000000,22000000,39000000,33500000,35000000,30000000,137500000]
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

}
