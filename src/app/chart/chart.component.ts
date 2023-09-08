import { Component, HostListener, OnInit, ViewChild} from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { HistoricGMEDataService } from '../historic-data.service';
import { DataManagerService } from './data-manager-service';
import { BaseChartDirective } from 'ng2-charts';
import * as dayjs from 'dayjs';
import { TimelineItemsService } from '../timeline-items/timeline-items.service';
import { ScreeSizeService } from '../scree-size.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @ViewChild(BaseChartDirective) public baseChart: BaseChartDirective | undefined;
  @HostListener('mousemove', ['$event']) onMousemove(event: MouseEvent) { }

  constructor(
    private _dataService: HistoricGMEDataService,
    private _dataManagerService: DataManagerService,
    private _timelineItemService: TimelineItemsService,
    private _sizeService: ScreeSizeService,
  ) { }
  public lineChartData: ChartConfiguration<'line'>['data'] = { labels: [], datasets: [] };
  public lineChartOptions: ChartOptions<'line'> = {};
  public lineChartLegend = false;
  // public lineChartDataMobile: ChartConfiguration<'line'>['data'] = { labels: [], datasets: [] };
  // public lineChartOptionsMobile: ChartOptions<'line'> = {};
  // public lineChartLegendMobile = false;

  public get canvasWidth(): number { return this._canvasWidth; }
  public get canvasHeight(): number { return this._canvasHeight; }

  public get isMobile(): boolean { return this._sizeService.isMobile; }

  private _canvasWidth: number = 400;
  private _canvasHeight: number = 300;
  
  private _chartContainerNgStyle: any = {};
  public get chartContainerNgStyle(): any { return this._chartContainerNgStyle;}

  ngOnInit() {
    let labels: string[] = this._dataService.priceEntriesAfterCutoff.map((entry) => { return entry.date.format('YYYY-MM-DD') });
    /** If there are too many data points to fit in the horizontal x-axis, not all of the labels will be included. */
    this.lineChartData.labels = labels;
    // this.lineChartDataMobile.labels = labels;

    this.lineChartOptions = {
      responsive: true,
      onHover: (event, array) => {
        if (array.length > 0) {
          const timelineItem = this._lookupEventByIndex(array[0].datasetIndex, array[0].index);
          if (timelineItem) {
            this._timelineItemService.selectItem(timelineItem);
          }else{
            // this._timelineItemService.unselectItem();
          }
        }else{
          // this._timelineItemService.unselectItem();
        }
      },
      onClick: (event, array) => {
        if (array.length > 0) {
          const timelineItem = this._lookupEventByIndex(array[0].datasetIndex, array[0].index);
          if (timelineItem) {
            this._timelineItemService.selectItem(timelineItem);
          }
        }
      },
      plugins: {
        tooltip: {
          backgroundColor: (context) => {
            if (context.tooltipItems.length > 0) {
              this._getTooltipBackgroundColor(context.tooltipItems[0])
            }
            return this._tooltipBackgroundColor;
          },
          borderColor: 'black',
          borderWidth: 1,
          displayColors: false,
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
            label: (context) => { return this._getTooltipLabel(context.label) },
            footer: (context) => { return this._getTooltipDescription(context[0].label) },
            title: (context) => { return this._getDateString(context[0].label) + '  -  GME share price: $' + Number(context[0].raw).toFixed(2); }
          },
        },
        legend: {
          display: true,
          labels: {
            color: 'rgb(0, 0, 0)',
            usePointStyle: true
          },
          position: 'left'
        }
      }
    };
    // this.lineChartOptionsMobile = this.lineChartOptions;

    this.lineChartData.datasets = this._dataManagerService.dataSets;
    // this.lineChartDataMobile.datasets = this._legendService.dataSetsMobile;
    this._dataManagerService.dataSets$.subscribe({
      next: (datasets) => {
        this.lineChartData.datasets = datasets;
        this.baseChart?.update();
        // this.lineChartDataMobile.datasets = this._legendService.dataSetsMobile;
        // this._timelineItemService.setChart(this.baseChart)
      },
      error: () => { },
      complete: () => { }
    });
    // this._legendService.dataSetsMobile$.subscribe({
    //   next: (datasets) => {
    //     this.lineChartDataMobile.datasets = datasets;
    //     // this._timelineItemService.setChart(this.baseChart)
    //   },
    //   error: () => { },
    //   complete: () => { }
    // });
    this._sizeService.screenDimensions$.subscribe({
      next: ()=>{ this._updateScreenSize(); }
    })
  }

  private _updateScreenSize(){
    const gridBottomRowHeight = 180;
    const width = this._sizeService.screenDimensions.width;
    const height = this._sizeService.screenDimensions.height - gridBottomRowHeight;

    const roundedWidth = Math.floor(width/20) * 20;
    const roundedHeight = Math.floor(height/50) * 50;
    // this._canvasWidth = width;
    // this._canvasHeight = roundedHeight;
    this._chartContainerNgStyle = {
      'max-width': roundedWidth + 'px',
      'height': roundedHeight + 'px',
    };
    // console.log("updating", this._canvasWidth, this._canvasHeight)
    // this.baseChart?.update();
    // console.log(this._chartContainerNgStyle)
  }

  private _getTooltipLabel(providedLabel: string): string {
    const foundEvent = this._lookupEvent(providedLabel);
    if (foundEvent) {
      return foundEvent.title;
    } else {
      return '';
    }
  }
  private _getTooltipDescription(providedLabel: string): string {
    const foundEvent = this._lookupEvent(providedLabel);
    if (foundEvent) {
      const description = foundEvent.description;
      if (description.length > 100) {
        return description.substring(0, 100) + "...";
      }
      return foundEvent.description;
    } else {
      return '';
    }
  }

  private _tooltipBackgroundColor: string = 'rgba(0,0,0,0.8)';
  private _getTooltipBackgroundColor(context: any) {
    const foundEvent = this._lookupEvent(context.label);
    if (foundEvent) {
      this._tooltipBackgroundColor = this._dataManagerService.getTypeColor(foundEvent.type);
    }
    return this._tooltipBackgroundColor;
  }

  private _lookupEvent(dateYYYYMMDD: string) {
    const foundItem = this._timelineItemService.timelineItems.find(item => item.dateYYYYMMDD === dateYYYYMMDD);
    return foundItem;
  }
  private _lookupEventByIndex(datasetIndex: number, index: number) {
    return this._dataManagerService.lookupEventByIndex(datasetIndex, index);
  }
  private _getDateString(dateYYYYMMDD: string): string {
    return dayjs(dateYYYYMMDD).format('MMMM D, YYYY');
  }

}
