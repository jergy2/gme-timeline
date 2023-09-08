import * as dayjs from "dayjs";
import { GmePriceEntry } from "../timeline-items/timeline-item/gme-price-entry.interface";
import { TimelineItemType } from "../timeline-items/timeline-item/timeline-item-type.enum";
import { TimelineItem } from "../timeline-items/timeline-item/timeline-item.class";
import { DatasetConfig } from "./dataset-config.class";
import {BehaviorSubject, Observable} from 'rxjs';


export class ChartDataSetManager {

  private _priceEntries: GmePriceEntry[] = [];
  private _datasets$: BehaviorSubject<any[]> = new BehaviorSubject<any>([]);
  private _datasetsMobile: any[] = [];
  private _datasetConfigs: DatasetConfig[] = [];
  private _timelineItems: TimelineItem[] = [];
  private _signifianceValue: number = 1;

  public get datasets(): any[] { return this._datasets$.getValue(); }
  public get datasets$(): Observable<any[]> { return this._datasets$.asObservable(); }
  public get datasetsMobile(): any[] { return this._datasetsMobile; }
  public get datasetConfigs(): DatasetConfig[] { return this._datasetConfigs; }
  public get significanceValue(): number { return this._signifianceValue; }

  // public get chartCutoffDate(): string { return '2020-07-01'; }

  constructor(priceEntries: GmePriceEntry[], timelineItems: TimelineItem[]) {
    this._priceEntries = priceEntries;
    this._timelineItems = timelineItems;
  }

  public updateSignificanceValue(value: number){
    this._signifianceValue = value;
    this.getAndUpdateDatasets();
  }

  public getAndUpdateDatasets() {
    let closePrices: number[] = this._priceEntries
      // .filter(entry => entry.date.format('YYYY-MM-DD') > this.chartCutoffDate)
      .map((entry: GmePriceEntry) => { return entry.close });
    let datasetConfigs: DatasetConfig[] = [];
    /** Get all datasets based on every combination of significance value and type. 
    *  This will produce arrays that have no such events
    */
    const allEventTypes: TimelineItemType[] = [
      TimelineItemType.EVENT, TimelineItemType.CORP, TimelineItemType.MEDIA, TimelineItemType.RC, TimelineItemType.DFV, TimelineItemType.UNRELATED, TimelineItemType.DRS,
    ];
    const allSignificances: number[] = this._getSignificances();
    allEventTypes.forEach(eventType => {
      allSignificances.forEach(significanceValue => {
        const datasetConfig: DatasetConfig = this._getDatasetConfig(eventType, significanceValue);
        datasetConfigs.push(datasetConfig);
      });
    });
    /** Only use datasets that have events. */
    datasetConfigs = datasetConfigs.filter(item => item.eventCount > 0);
    const datasets: {}[] = [];

    datasets.push({
      data: closePrices,
      label: 'GME price $ ',
      fill: true,
      tension: 0.5,
      borderColor: 'green',
      backgroundColor: 'rgba(0,255,0,0.075)',
      borderWidth: 0.8,
      pointRadius: 0,
      pointHitRadius: 0,
      pointHoverRadius: 0,
    });
    datasetConfigs.forEach(datasetConfig => {
      datasets.push({
        data: datasetConfig.dataPoints,
        label: datasetConfig.label,
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        pointBackgroundColor: datasetConfig.color,
        pointBorderColor: 'black',
        pointBorderWidth: 1,
        borderWidth: 0.1,
        pointRadius: this._getPointRadius(datasetConfig.significance),
        pointHitRadius: 5 + (3 * datasetConfig.significance),
        pointHoverRadius: 5 + (4 * datasetConfig.significance),
        pointStyle: 'circle',
      })
    });
    this._datasetConfigs = datasetConfigs;
    this._datasets$.next(datasets);
  }

  public getTypeColor(type: TimelineItemType, transparency?: number): string {
    if (!transparency) {
      transparency = 0.8;
    }
    if (type === TimelineItemType.CORP) {
      return 'rgba(128,0,0,' + String(transparency) + ')';
    } else if (type === TimelineItemType.EVENT) {
      return 'rgba(75,75,75,' + String(transparency) + ')';
    } else if (type === TimelineItemType.MEDIA) {
      return 'rgba(230,110,0,' + String(transparency) + ')';
    } else if (type === TimelineItemType.RC) {
      return 'rgba(0,0,255,' + String(transparency) + ')';
    } else if (type === TimelineItemType.DFV) {
      return 'rgba(255,0,0,' + String(transparency) + ')';
    } else if (type === TimelineItemType.UNRELATED) {
      return 'rgba(0,0,0,' + String(transparency) + ')';
    } else if (type === TimelineItemType.DRS) {
      return 'rgba(148,23,106,' + String(transparency) + ')';
    } else {
      return 'black';
    }
  }

  public lookupIndexByEvent(event: TimelineItem) {
    console.log("LOOKING UP INDEX: ", event);
    this.datasetConfigs.forEach(datasetConfig => {
      const datapoints = datasetConfig.dataPoints.filter(item => item !== null);
      console.log("DATA POINTS:", datapoints)
    })
  }

  public lookupEventByIndex(datasetIndex: number, index: number) {
    const config = this._datasetConfigs[datasetIndex - 1];
    const entry: GmePriceEntry | null = config.priceEntries[index];
    if (entry !== null) {
      const event = this._lookupEventByDate(entry.date.format('YYYY-MM-DD'));
      return event;
    }
    return undefined;
  }

  private _getSignificances(): number[] {
    let value = this._signifianceValue;
    const maxSignificanceValue = 5;
    let significances: number[] = [];
    for(let i=value; i<=maxSignificanceValue; i++){
      significances.push(i);
    }
    return significances;
  }

  private _getDatasetConfig(type: TimelineItemType, significanceValue: number): DatasetConfig {
    const dataSet = this._priceEntries
      // .filter(entry => entry.date.format('YYYY-MM-DD') > this.chartCutoffDate)
      .map((entry) => {
        const foundEvent = this._lookupEventByDate(entry.date.format('YYYY-MM-DD'));
        if (foundEvent) {
          if (foundEvent.type === type && foundEvent.significance === significanceValue) {
            return entry;
          }
        }
        return null;
      });
    const datasetConfig = new DatasetConfig(dataSet, type, type, this.getTypeColor(type), significanceValue);
    return datasetConfig;
  }


  /** finds a timeline item by date */
  private _lookupEventByDate(dateYYYYMMDD: string) {
    const foundItem = this._timelineItems.find(item => item.dateYYYYMMDD === dateYYYYMMDD);
    return foundItem;
  }



  private _getPointRadius(significance: number): number{
    if(significance === 0){
      return 2;
    }else if(significance === 1){
      return 4;
    }else if(significance === 2){
      return 6;
    }else if(significance === 3){
      return 9;
    }else if(significance === 4){
      return 13;
    }else if(significance === 5){
      return 18;
    }
    return 1;
  }


}
