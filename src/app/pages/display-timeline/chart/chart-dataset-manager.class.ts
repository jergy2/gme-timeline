import * as dayjs from "dayjs";
import { GmePriceEntry } from "../timeline-items/timeline-item/gme-price-entry.interface";
import { TimelineItemType } from "../timeline-items/timeline-item/timeline-item-type.enum";
import { TimelineItem } from "../timeline-items/timeline-item/timeline-item.class";
import { DatasetConfig } from "./dataset-config.class";
import { BehaviorSubject, Observable, Subject, first } from 'rxjs';


export class ChartDataSetManager {

  private _priceEntries: GmePriceEntry[] = [];
  private _datasets$: BehaviorSubject<any[]> = new BehaviorSubject<any>([]);
  private _datasetsMobile: any[] = [];
  private _datasetConfigs: DatasetConfig[] = [];
  private _timelineItems: TimelineItem[] = [];


  private _signifianceValue: number = -1;
  private _timelineCategories: TimelineItemType[] = [];
  // private _isUpdating$: Subject<boolean> = new Subject();
  
  // public get isUpdating$(): Observable<boolean> { return this._isUpdating$.asObservable(); }
  public get datasets(): any[] { return this._datasets$.getValue(); }
  public get datasets$(): Observable<any[]> { return this._datasets$.asObservable(); }
  public get datasetsMobile(): any[] { return this._datasetsMobile; }
  public get datasetConfigs(): DatasetConfig[] { return this._datasetConfigs; }

  constructor(priceEntries: GmePriceEntry[], timelineItems: TimelineItem[], categories: TimelineItemType[], significanceValue: number) {
    this._priceEntries = priceEntries;
    this._timelineItems = timelineItems;
    this._timelineCategories = categories;
    this._signifianceValue = significanceValue;
  }

  public updateSignificanceValue(value: number) {
    // console.log("updating significance")
    // this._isUpdating$.next(true);
    this._signifianceValue = value;
    this.getAndUpdateDatasets();
    // this._isUpdating$.next(false);
  }

  public updateCategories(categories: TimelineItemType[]) {
    // console.log("updating categories")
    // this._isUpdating$.next(true);
    this._timelineCategories = categories;
    this.getAndUpdateDatasets();
    // this._isUpdating$.next(false);
  }

  public getAndUpdateDatasets() {
    let closePrices: number[] = this._priceEntries
      // .filter(entry => entry.date.format('YYYY-MM-DD') > this.chartCutoffDate)
      .map((entry: GmePriceEntry) => { return entry.close });
    let datasetConfigs = this._getDatasetConfigs();
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
        pointHitRadius: this._getPointHitRadius(datasetConfig.significance),
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
    } else if (type === TimelineItemType.MEDIA) {
      return 'rgba(230,110,0,' + String(transparency) + ')';
    } else if (type === TimelineItemType.RC) {
      return 'rgba(0,0,255,' + String(transparency) + ')';
    } else if (type === TimelineItemType.DFV) {
      return 'rgba(255,0,0,' + String(transparency) + ')';
    } else if (type === TimelineItemType.OTHER) {
      return 'rgba(128,128,128,' + String(transparency) + ')';
    } else if (type === TimelineItemType.DRS) {
      return 'rgba(148,23,106,' + String(transparency) + ')';
    } else {
      return 'black';
    }
  }

  public lookupIndexByTimelineItem(timelineItem: TimelineItem): { datasetIndex: number, itemIndex: number } {
    const indexValue = {
      datasetIndex: -1, itemIndex: -1,
    }
    this._datasetConfigs.forEach(config => {
      const itemIndex = config.getIndexOfTimelineItem(timelineItem);
      if (itemIndex > -1) {
        indexValue.datasetIndex = this._datasetConfigs.indexOf(config) + 1;
        indexValue.itemIndex = itemIndex;
      }
    });
    return indexValue;
  }

  public lookupTimelineItemByIndex(datasetIndex: number, index: number) {
    const config = this._datasetConfigs[datasetIndex - 1];
    const timelineItem: TimelineItem | null = config.timelineItems[index];
    if (timelineItem !== null) {
      if (timelineItem.gmePriceEntry) {
        const event = this._lookupEvent(timelineItem.gmePriceEntry.date.format('YYYY-MM-DD'), config.itemType, config.significance);
        return event;
      }
    }
    return undefined;
  }

  public lookupDataset(datasetIndex:number){
    const config = this._datasetConfigs[datasetIndex - 1];
    return config;
  }

  private _getDatasetConfigs(): DatasetConfig[] {
    /** Get all datasets based on every combination of significance value and type. 
*  This will produce arrays that have no events that match the significance and type
*/
    const startTime = dayjs();
    const datapointSets: {
      type: TimelineItemType,
      significance: number,
      datapoints: (TimelineItem | null)[]
    }[] = [];
    const allSignificances: number[] = this._getSignificances();
    let filteredTimelineEvents: TimelineItem[] = [];
    this._timelineCategories.forEach(eventType => {
      allSignificances.forEach(significanceValue => {
        this._timelineItems.forEach(item => {
          if (item.types.indexOf(eventType) > -1 && item.significance === significanceValue) {
              filteredTimelineEvents.push(item);
          }
        });
        datapointSets.push({
          type: eventType,
          significance: significanceValue,
          datapoints: [],
        });
      });
    });
    // console.log("DATAPOINT SETS", datapointSets)
    filteredTimelineEvents = filteredTimelineEvents.sort((item1, item2) => {
      if (item1.dateYYYYMMDD < item2.dateYYYYMMDD) {
        return -1;
      } else if (item1.dateYYYYMMDD > item2.dateYYYYMMDD) {
        return 1;
      } else {
        return 0;
      }
    });
    // console.log("ALL ITEM EVENTS", this._timelineItems)
    // console.log("FILTERED TIMELINE ITEM EVENTS", filteredTimelineEvents)
    filteredTimelineEvents = this._removeSameDateEvents(filteredTimelineEvents);
    // console.log("DUPLICATES REMOVED", filteredTimelineEvents)
    let currentDate = this._priceEntries[0].date;
    const endDate = this._priceEntries[this._priceEntries.length - 1].date;
    if (filteredTimelineEvents.length > 0) {
      let eventIndex = 0;
      let nextEventDate = filteredTimelineEvents[eventIndex].dateYYYYMMDD;
      if(nextEventDate < currentDate.format('YYYY-MM-DD')){
        while(dayjs(nextEventDate).isBefore(currentDate)){
          eventIndex++;
          nextEventDate = filteredTimelineEvents[eventIndex].dateYYYYMMDD;
        }
      }
      while (currentDate.isBefore(endDate) || currentDate.isSame(endDate)) {
        if (currentDate.format('YYYY-MM-DD') === (nextEventDate)) {
          const event = filteredTimelineEvents[eventIndex];
          let eventAreadyAdded = false;
          datapointSets.forEach(datapointSet => {
            if (datapointSet.significance === event.significance && (event.types.indexOf(datapointSet.type) > -1)) {
              if(eventAreadyAdded === false){
                datapointSet.datapoints.push(event);
                eventAreadyAdded = true;
              }
            } else {
              datapointSet.datapoints.push(null);
            }
          });
          eventIndex++;
          if(eventIndex < filteredTimelineEvents.length){
            nextEventDate = filteredTimelineEvents[eventIndex].dateYYYYMMDD;
          }
        } else {
          datapointSets.forEach(datapointSet => {
            datapointSet.datapoints.push(null);
          });
        }
        currentDate = dayjs(currentDate).add(1, 'days');
      }
    }
    const configs = datapointSets.map(set => {
      return new DatasetConfig(set.datapoints, set.type, set.type, this.getTypeColor(set.type), set.significance);
    });
    const endTime = dayjs();
    const duration = endTime.diff(startTime, 'milliseconds');
    return configs
  }

  private _removeSameDateEvents(events: TimelineItem[]): TimelineItem[] {
    if (events.length > 1) {
      const newEvents: TimelineItem[] = [];
      for (let i = 1; i < events.length; i++) {
        const firstEvent = events[i - 1];
        const secondEvent = events[i]
        if (secondEvent.dateYYYYMMDD === firstEvent.dateYYYYMMDD) {
          // console.log(secondEvent.title + " versus " + firstEvent.title + " - " + secondEvent.dateYYYYMMDD)
          if (secondEvent.significance > firstEvent.significance) {
            newEvents.push(secondEvent);
          } else if (secondEvent.significance < firstEvent.significance) {
            newEvents.push(firstEvent);
          } else if (secondEvent.significance === firstEvent.significance) {
            const higherPriority = this._getPriorityType(firstEvent, secondEvent);
            newEvents.push(higherPriority);
          }
          i++;
        } else {
          if (i === events.length - 1) {
            newEvents.push(firstEvent);
            newEvents.push(secondEvent);
          } else {
            newEvents.push(firstEvent);
          }
        }
      }
      return newEvents;
    } else {
      return events;
    }
  }

  private _getPriorityType(firstEvent: TimelineItem, secondEvent: TimelineItem): TimelineItem {
    const bothItems = [firstEvent, secondEvent];
    const priorityTypes = [TimelineItemType.DRS,
    TimelineItemType.CORP,
    TimelineItemType.RC,
    TimelineItemType.MEDIA,
    TimelineItemType.DFV,
    TimelineItemType.OTHER];
    for (let i = 0; i < priorityTypes.length; i++) {
      const index = bothItems.findIndex(item => item.mainType === priorityTypes[i]);
      if (index > -1) {
        return bothItems[index];
      }
    }
    return firstEvent;
  }

  private _getSignificances(): number[] {
    let value = this._signifianceValue;
    const maxSignificanceValue = 5;
    let significances: number[] = [];
    for(let i = maxSignificanceValue; i>= value; i--){
      significances.push(i);
    }
    return significances;
  }

  private _lookupEvent(dateYYYYMMDD: string, type: TimelineItemType, significance: number): TimelineItem | undefined {
    const foundItem = this._timelineItems.find(item => (item.dateYYYYMMDD === dateYYYYMMDD) && (item.types.indexOf(type) > -1) && item.significance === significance);
    return foundItem;
  }

  private _getPointRadius(significance: number): number {
    if (significance === 0) {
      return 2;
    } else if (significance === 1) {
      return 4;
    } else if (significance === 2) {
      return 6;
    } else if (significance === 3) {
      return 9;
    } else if (significance === 4) {
      return 13;
    } else if (significance === 5) {
      return 18;
    }
    return 1;
  }

  private _getPointHitRadius(significance: number): number {
    if (significance === 0) {
      return 2;
    } else if (significance === 1) {
      return 4;
    } else if (significance === 2) {
      return 5;
    } else if (significance === 3) {
      return 7;
    } else if (significance === 4) {
      return 10;
    } else if (significance === 5) {
      return 15;
    }
    return 1;
  }

}
