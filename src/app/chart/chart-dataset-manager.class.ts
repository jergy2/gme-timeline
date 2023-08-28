import { GmePriceEntry } from "../timeline-items/timeline-item/gme-price-entry.interface";
import { TimelineItemType } from "../timeline-items/timeline-item/timeline-item-type.enum";
import { timelineItems } from "../timeline-items/timeline-items";
import { DatasetConfig } from "./dataset-config.class";
import { LegendItem } from "./event-legend/legend-item/legend-item.class";

export class ChartDataSetManager {

  private _priceEntries: GmePriceEntry[] = [];
  private _datasets: any[] = [];
  private _datasetConfigs: DatasetConfig[] = [];
  private _legendItems: LegendItem[] = [];

  public get datasets(): any[] { return this._datasets; }
  public get datasetConfigs(): DatasetConfig[] { return this._datasetConfigs; }
  public get legendItems(): LegendItem[] { return this._legendItems; }

  constructor(priceEntries: GmePriceEntry[]) {
    this._priceEntries = priceEntries;

  }

  public clickButton() {
    console.log("SPLICE", this._datasets.length)
    this._datasets.splice(this._datasets.length - 1);
    console.log(this._datasets.length)
  }

  public getDataSets(): any[] {
    const closePrices: number[] = this._priceEntries.map((entry) => { return entry.close });
    let datasetConfigs: DatasetConfig[] = [];
    /** Get all datasets based on every combination of significance value and type. 
    *  This will produce arrays that have no such events
    */
    const allPointTypes: TimelineItemType[] = [
      TimelineItemType.EVENT, TimelineItemType.CORP, TimelineItemType.MEDIA, TimelineItemType.RC, TimelineItemType.DFV, TimelineItemType.UNRELATED, TimelineItemType.DRS,
    ];
    const allSignificances: number[] = [0, 1, 2, 3, 4, 5];
    allPointTypes.forEach(pointType => {
      allSignificances.forEach(significanceValue => {
        const datasetConfig: DatasetConfig = this._getDatasetConfig(pointType, significanceValue);
        datasetConfigs.push(datasetConfig);
      });
      this._legendItems.push(new LegendItem(pointType, this.getTypeColor(pointType)));
    });
    /** Only use datasets that have events. */
    datasetConfigs = datasetConfigs.filter(item => item.eventCount > 0);
    this._datasets.push({
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
      this._datasets.push({
        data: datasetConfig.dataPoints,
        label: datasetConfig.label,
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        pointBackgroundColor: datasetConfig.color,
        pointBorderColor: 'black',
        pointBorderWidth: 1,
        borderWidth: 0.1,
        pointRadius: 1 + (3 * datasetConfig.significance),
        pointHitRadius: 2 + (3 * datasetConfig.significance),
        pointHoverRadius: 5 + (4 * datasetConfig.significance),
        pointStyle: 'circle',
      })
    });
    this._datasetConfigs = datasetConfigs;
    return this._datasets;
  }

  public getTypeColor(type: TimelineItemType, transparency?: number): string {
    if(!transparency){
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

  public lookupEventByIndex(datasetIndex: number, index: number){
    const config = this._datasetConfigs[datasetIndex-1];
    const entry: GmePriceEntry | null = config.priceEntries[index];
    if(entry !== null){
      const event = this._lookupEventByDate(entry.date.format('YYYY-MM-DD'));
      return event;
    }
    return undefined;
  }

  private _getDatasetConfig(type: TimelineItemType, significanceValue: number): DatasetConfig {
    const dataSet = this._priceEntries.map((entry) => {
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
    const foundItem = timelineItems.find(item => item.dateYYYYMMDD === dateYYYYMMDD);
    return foundItem;
  }


}
