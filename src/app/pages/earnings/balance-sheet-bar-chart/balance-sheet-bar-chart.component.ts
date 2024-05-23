import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-balance-sheet-bar-chart',
  templateUrl: './balance-sheet-bar-chart.component.html',
  styleUrls: ['./balance-sheet-bar-chart.component.scss']
})
export class BalanceSheetBarChartComponent {

  public barChartData: ChartConfiguration<'bar'>['data'] = { 
    labels: [
      'Q1 21', 'Q2 21', 'Q3 21', 'Q4 21', 'Q1 22', 'Q2 22', 'Q3 22', 'Q4 22', 'Q1 23', 'Q2 23', 'Q3 23', 'Q4 23', 
    ], 
    datasets: [
      {
        label: 'Dataset 1',
        data: [ 12, 22, 12, 10, 12, 22, 12, 10, 19, 23, 25, 20],
        backgroundColor: 'red',
        stack: 'Stack 0',
      },
      {
        label: 'Dataset 1',
        data: [ 12, 22, 12, 10, 12, 22, 12, 10, 19, 23, 25, 20],
        backgroundColor: 'green',
        stack: 'Stack 0',
      },
      {
        label: 'Dataset 1',
        data: [ 12, 22, 12, 10, 12, 22, 12, 10, 19, 23, 25, 20],
        backgroundColor: 'blue',
        stack: 'Stack 0',
      },
    ] };
  public barChartOptions: ChartOptions<'bar'> = {
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked'
      },
    },
    responsive: true,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        stacked: false,
      },
      y: {
        stacked: true
      }
    }
  };
  public barChartLegend = false;
}
