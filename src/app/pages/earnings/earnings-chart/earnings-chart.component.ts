import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartOptions, TooltipItem } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';
import { ScreenSizeService } from 'src/app/services/screen-size.service';

@Component({
  selector: 'app-earnings-chart',
  templateUrl: './earnings-chart.component.html',
  styleUrls: ['./earnings-chart.component.scss']
})
export class EarningsChartComponent implements OnInit, AfterViewInit {

  constructor(private _sizeService: ScreenSizeService) { }

  public barChartData: ChartConfiguration<'bar'>['data'] = { labels: [], datasets: [] };
  public barChartOptions: ChartOptions<'bar'> = {};
  public barChartLegend = true;
  @ViewChild(BaseChartDirective) public baseChart: BaseChartDirective | undefined;

  ngOnInit(): void {
    Chart.register(ChartDataLabels)
    this._setData();
    this._setOptions();

  }

  ngAfterViewInit(): void {
    this._sizeService.screenDimensions$.subscribe((change) => {
      this._setData();
      this._setOptions();
    });
  }

  public get xAxisLabels(): string[] {
    return [
      'FY 05', 'FY 06', 'FY 07', 'FY 08', 'FY 09', 'FY 10',
      'FY 11', 'FY 12', 'FY 13', 'FY 14', 'FY 15', 'FY 16',
      'FY 17', 'FY 18', 'FY 19', 'FY 20', 'FY 21', 'FY 22',
      'FY 23',
    ];
  }
  public get revenueItemsColors(): string[] {
    return [
      'rgba(3, 90, 252, 0.9)', 'rgba(3, 90, 252, 0.9)', 'rgba(3, 90, 252, 0.9)', 'rgba(3, 90, 252, 0.9)', 'rgba(3, 90, 252, 0.9)', 'rgba(3, 90, 252, 0.9)',
      'rgba(3, 90, 252, 0.9)', 'rgba(3, 90, 252, 0.9)', 'rgba(3, 90, 252, 0.9)', 'rgba(3, 90, 252, 0.9)', 'rgba(3, 90, 252, 0.9)', 'rgba(3, 90, 252, 0.9)',
      'rgba(3, 90, 252, 0.9)', 'rgba(3, 90, 252, 0.9)', 'rgba(3, 90, 252, 0.9)', 'rgba(3, 90, 252, 0.9)', 'rgba(3, 90, 252, 0.9)', 'rgba(3, 90, 252, 0.9)',
      'rgba(3, 90, 252, 0.9)',
    ];
  }
  public get revenueItemsData(): number[] {
    return [
      3091783000, 5318900000, 7094000000, 8805900000, 9078000000, 9473700000,
      9550500000, 8886700000, 9039500000, 9296000000, 9363800000, 8607900000,
      9224600000, 8285300000, 6466000000, 5089800000, 6010700000, 5927200000,
      5272800000,
    ];
  }
  public get earningsItemsColors(): string[] {
    return [
      'rgba(0, 145, 10, 0.9)', 'rgba(0, 145, 10, 0.9)', 'rgba(0, 145, 10, 0.9)', 'rgba(0, 145, 10, 0.9)', 'rgba(0, 145, 10, 0.9)', 'rgba(0, 145, 10, 0.9)',
      'rgba(0, 145, 10, 0.9)', 'rgba(227, 0, 0, 0.9)', 'rgba(0, 145, 10, 0.9)', 'rgba(0, 145, 10, 0.9)', 'rgba(0, 145, 10, 0.9)', 'rgba(0, 145, 10, 0.9)',
      'rgba(0, 145, 10, 0.9)', 'rgba(227, 0, 0, 0.9)', 'rgba(227, 0, 0, 0.9)', 'rgba(227, 0, 0, 0.9)', 'rgba(227, 0, 0, 0.9)', 'rgba(227, 0, 0, 0.9)',
      'rgba(0, 145, 10, 0.9)',
    ];
  }
  public get earningsItemsData(): number[] {
    return [
      100784000, 158300000, 288300000, 398300000, 377300000, 408000000,
      339900000, -269700000, 354200000, 393100000, 402800000, 353200000,
      34700000, -673000000, -470900000, -215300000, -381300000, -313100000,
      6700000,
    ];
  }

  private _setData() {
    /**
     * 
     * Total of 19 items from FY05 to FY23 inclusive
     * 
     */
    const width = this._sizeService.screenWidth;
    const baseChart = this.baseChart;
    this.barChartData = {
      labels: this.xAxisLabels,
      datasets: [
        {
          label: 'Revenue (in $ billions)',
          datalabels: {
            color: 'rgba(0,0,200,0.9)',
            listeners: {
              enter() {

              }
            },

            display(context) {
              if (context.dataIndex === 18) {
                return true;
              }
              if (width < 800) {

                return false;
              }
              return true;
            },
            align: 'top',
            anchor: 'end',
            backgroundColor: 'white',
            borderRadius: 5,


            borderColor: function (context) {
              return 'rgba(0,0,255,0.1)';
            },
            borderWidth: 1,
            formatter: function (value, context) {
              return '$' + (value / 1000000000).toFixed(1);
            },
            font: {
              weight: 'bold',
            },
            padding: 2,

          },
          backgroundColor: this.revenueItemsColors,
          data: this.revenueItemsData,
        },
        {
          label: 'Net Earnings (in $ millions)',
          datalabels: {
            // color: '#000',
            listeners: {
              enter: function (context: any, event) {
              },
            },
            display(context) {
              if (context.dataIndex === 18) {
                return true;
              }
              if (width < 800) {

                return false;
              }
              return true;
            },
            // align: 'top',
            align(context) {
              const value = Number(context.dataset.data[context.dataIndex]);
              if (value > 0) {
                return 'top';
              } else if (value < 0) {
                return 'bottom';
              }
              return 'top';
            },
            anchor(context) {
              const value = Number(context.dataset.data[context.dataIndex]);
              if (value > 0) {
                return 'end';
              } else if (value < 0) {
                return 'start';
              }
              return 'end';
            },
            backgroundColor: 'rgba(255,255,255,0.7)',
            borderRadius: 5,
            borderColor: function (context) {
              return 'rgba(0,0,255,0.1)';
            },
            borderWidth: 1,
            formatter: function (value, context) {
              return '$' + (value / 1000000).toFixed(0);
            },
            // font: {
            //   weight: 'bold',
            //   size: 12,
            // },
            font: function (context) {
              const value = Number(context.dataset.data[context.dataIndex]);
              let fontSize = 12;
              if (context.dataIndex === 18) {
                return {
                  weight: 'bold',
                  size: 16,
                };
              } else {
                if (width < 1400 && width > 800) {
                  fontSize = 10;
                }
                if (width < 800) {
                  fontSize = 8;
                }
              }
              return {
                weight: 'bold',
                size: fontSize,
              };
            },
            color: function (context) {
              const value = Number(context.dataset.data[context.dataIndex]);
              if (value > 0) {
                return 'green';
              } else if (value < 0) {
                return 'red';
              } else {
                return 'black';
              }

            },
            padding: 2,

          },
          backgroundColor: this.earningsItemsColors,
          data: this.earningsItemsData,
        },
        {
          label: 'Net Loss (in $ millions)',
          datalabels: {},
          data: [],
          backgroundColor: [
            'rgba(255, 0, 0, 0.9)',
          ],
        },
      ]
    };
  }
  private _setOptions() {
    this.barChartOptions = {
      responsive: true,
      animation: false,
      scales: {
        y: {
          min: -1000000000,
          grid: {
            color: function (context) {
              if (context.tick.value === 0) {
                return 'rgba(0,0,0,0.5)';
              }
              return 'rgba(0,0,0,0.05)';
            },
          },
          ticks: {
            backdropColor: 'purple',
            // Include a dollar sign in the ticks
            callback: function (value, index, ticks) {
              const numVal = Number(value);
              if (numVal >= 0) {
                if (numVal === 0) {
                  return '$0'
                } else {
                  return '$' + (numVal / 1000000000) + ' billion';
                }

              } else {
                return '$' + (numVal / 1000000000) + ' billion';
              }
            }
          }
        },

      },

      layout: {

      },
      plugins: {
        datalabels: {

        },
        legend: {
          onClick: (event, array) => {
          },
          position: 'top',
          labels: {
            padding: 20,
            boxPadding: 0,
            boxWidth: 12,
            boxHeight: 12,
          },

        },
        tooltip: {
          // backgroundColor: (context) => {
          //   if (context.tooltipItems.length > 0) {
          //     this._getTooltipBackgroundColor(context.tooltipItems[0])
          //   }
          //   return this._tooltipBackgroundColor;
          // },
          // borderColor: 'black',
          // borderWidth: 1,
          // // displayColors: false,
          // bodyFont: {
          //   size: 16,
          //   weight: 'bold',
          // },
          // titleFont: {
          //   weight: 'normal',
          // },
          // footerFont: {
          //   weight: 'normal',
          // },

          callbacks: {
            label: (context) => { return this._labelContext(context) },
            footer: (context) => { return this._footerContext(context) },
            title: (context) => { return this._titleContext(context) }
          },
        },
      },

    }
  }

  private _labelContext(context: TooltipItem<"bar">): string {
    if (context.datasetIndex === 0) {
      // revenue
      return "Top line (revenue):  $" + this.numberWithCommas(Number(context.raw));
    } else if (context.datasetIndex === 1) {
      // net earnings
      const value = Number(context.raw);
      if (value >= 0) {
        return "Bottom line (net earnings):  $" + this.numberWithCommas(value);
      } else {
        return "Bottom line (net loss):  $" + this.numberWithCommas(value);
      }
    }
    return '';

  }
  private _footerContext(context: TooltipItem<"bar">[]): string {
    const item = context[0];
    // const percent = Math.round((item.parsed/this.tso)*100);
    // return percent + "%, " + String(Math.round(item.parsed/1000000)) + " million shares";
    // return 'Bottom line / Net income';
    return '';
  }
  private _titleContext(context: TooltipItem<"bar">[]): string {
    return this.xAxisLabels[context[0].dataIndex];
    // return "Revenue:  $"+ this.numberWithCommas(Number(context[0].raw));
  }

  numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
