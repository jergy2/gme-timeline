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
  private _dataSetsMobile$: BehaviorSubject<any> = new BehaviorSubject([]);
  private _dataManager: ChartDataSetManager;
  public get dataSets(): any[] { return this._dataSets$.getValue(); }
  public get dataSets$(): Observable<any[]> { return this._dataSets$.asObservable(); }
  public get dataSetsMobile(): any[] { return this._dataSetsMobile$.getValue(); }
  public get dataSetsMobile$(): Observable<any[]> { return this._dataSetsMobile$.asObservable(); }
  public get dataManager(): ChartDataSetManager { return this._dataManager; }

  public registerDataManager(dataManager: ChartDataSetManager) {
    this._dataManager = dataManager;
    this._dataSets$.next(this._dataManager.getDataSets());
    this._dataSetsMobile$.next(this._dataManager.getDataSetsMobile())
  }

  public gmeSharePrice(event :TimelineItem): number {
    return this._dataManager.gmeSharePrice(event);
  }

  public lookupEventByIndex(datasetIndex: number, index: number){
    return this._dataManager.lookupEventByIndex(datasetIndex, index);
  }
  public lookupIndexByEvent(event: TimelineItem){
    return this._dataManager.lookupIndexByEvent(event);
  }

  public getTypeColor(type: TimelineItemType, transparency?: number): string {
    return this._dataManager.getTypeColor(type, transparency);
  }



}
