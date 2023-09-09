import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { HistoricGMEDataService } from '../historic-gme-data.service';
import { DataManagerService } from './data-manager-service';
import { BaseChartDirective } from 'ng2-charts';
import * as dayjs from 'dayjs';
import { TimelineItemsService } from '../timeline-items/timeline-items.service';
import { ScreeSizeService } from '../scree-size.service';
import { TimelineItem } from '../timeline-items/timeline-item/timeline-item.class';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, AfterViewInit {

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
  public get chartContainerNgStyle(): any { return this._chartContainerNgStyle; }

  ngOnInit() {
    let labels: string[] = this._dataService.priceEntriesAfterCutoff.map((entry) => { return entry.date.format('YYYY-MM-DD') });
    /** If there are too many data points to fit in the horizontal x-axis, not all of the labels will be included. */
    this.lineChartData.labels = labels;
    // this.lineChartDataMobile.labels = labels;
    this._setLineChartOptions();
    this.lineChartData.datasets = this._dataManagerService.dataSets;
  }

  ngAfterViewInit() {
    /**
     * This subscription is required to update the chart after datasets are modified.
     * For example, if the user changes a filter value such as significance value, 
     * this subscription will fire and the chart must be updated here.
     */
    this._dataManagerService.dataSets$.subscribe({
      next: (datasets) => {
        this.lineChartData.datasets = datasets;
        this.baseChart?.update();
      },
      error: () => { },
      complete: () => { }
    });
    this._sizeService.screenDimensions$.subscribe({
      next: () => { this._updateScreenSize(); }
    });
    this._timelineItemService.itemSelected$.subscribe({
      next: (selected) => {
        if (selected.item) {
          if(selected.source !== 'CHART'){
            this._openToolTip(selected.item);
          }
        }
      },
      error: () => { },
      complete: () => { }
    });
  }



  private _setLineChartOptions(){
    this.lineChartOptions =  {
      responsive: true,
      onHover: (event, array) => {
        if (array.length > 0) {
          if(!this._tooltipOpenedFromTimelineItems){
            const timelineItem = this._lookupEventByIndex(array[0].datasetIndex, array[0].index);
            if (timelineItem) {
              this._timelineItemService.selectItem(timelineItem, 'CHART');
            } else {
              // this._timelineItemService.unselectItem();
            }
          }else{
            this._tooltipOpenedFromTimelineItems = false;
          }          
        } else {
          // this._timelineItemService.unselectItem();
        }
      },
      onClick: (event, array) => {
        // console.log(event, array)
        // if (array.length > 0) {
        //   const timelineItem = this._lookupEventByIndex(array[0].datasetIndex, array[0].index);
        //   if (timelineItem) {
        //     this._timelineItemService.selectItem(timelineItem);
        //   }
        // }
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
  }

  private _tooltipOpenedFromTimelineItems: boolean = false;

  private _openToolTip(item: TimelineItem) {
    var mouseMoveEvent, meta, point;
    const itemIndex = this._dataManagerService.lookupIndexByEvent(item);
    if(this.baseChart?.chart){
      this.baseChart?.chart?.setActiveElements([{
        datasetIndex: itemIndex.datasetIndex,
        index: itemIndex.itemIndex,
      }]);
    }
    meta = this.baseChart?.chart?.getDatasetMeta(itemIndex.datasetIndex);
    if (meta) {
      // console.log(meta.data)
      point = meta.data[itemIndex.itemIndex];
    }
    if (point) {
      mouseMoveEvent = new MouseEvent('mousemove', {
        clientX: point.x,
        clientY: point.y,
      });
      this._tooltipOpenedFromTimelineItems = true;
      this.baseChart?.chart?.canvas.dispatchEvent(mouseMoveEvent);
    }
  }

  private _updateScreenSize() {
    const gridBottomRowHeight = 180;
    const width = this._sizeService.screenDimensions.width;
    const height = this._sizeService.screenDimensions.height - gridBottomRowHeight;
    const roundedWidth = Math.floor(width / 20) * 20;
    const roundedHeight = Math.floor(height / 50) * 50;
    this._chartContainerNgStyle = {
      'max-width': roundedWidth + 'px',
      'height': roundedHeight + 'px',
    };
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
    const foundItem = this._timelineItemService.allTimelineItems.find(item => item.dateYYYYMMDD === dateYYYYMMDD);
    return foundItem;
  }
  private _lookupEventByIndex(datasetIndex: number, index: number) {
    return this._dataManagerService.lookupEventByIndex(datasetIndex, index);
  }
  private _getDateString(dateYYYYMMDD: string): string {
    return dayjs(dateYYYYMMDD).format('MMMM D, YYYY');
  }

}
