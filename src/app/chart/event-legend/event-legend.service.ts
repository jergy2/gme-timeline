import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChartDataSetManager } from '../chart-dataset-manager.class';
import { TimelineItem } from 'src/app/timeline-items/timeline-item/timeline-item.class';
import { TimelineItemType } from 'src/app/timeline-items/timeline-item/timeline-item-type.enum';

@Injectable({
  providedIn: 'root'
})
export class EventLegendService {

  constructor() { 
    this._dataManager = new ChartDataSetManager([]);
  }

  private _dataSets$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private _dataManager: ChartDataSetManager;
  public get dataSets(): any[] { return this._dataSets$.getValue(); }
  public get dataSets$(): Observable<any[]> { return this._dataSets$.asObservable(); }
  public get dataManager(): ChartDataSetManager { return this._dataManager; }

  public clickButton() {
    this._dataManager.clickButton();
    console.log("button clicked", this._dataManager.datasets)
    this._dataSets$.next(this._dataManager.datasets);
  }

  public registerDataManager(dataManager: ChartDataSetManager) {
    this._dataManager = dataManager;
    this._dataSets$.next(this._dataManager.getDataSets());
  }

  public lookupEventByIndex(datasetIndex: number, index: number){
    return this._dataManager.lookupEventByIndex(datasetIndex, index);
  }

  public getTypeColor(type: TimelineItemType, transparency?: number): string {
    return this._dataManager.getTypeColor(type, transparency);
  }



}
