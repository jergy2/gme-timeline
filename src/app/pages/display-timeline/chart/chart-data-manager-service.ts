import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChartDataSetManager } from './chart-dataset-manager.class';
import { TimelineItemType } from '../timeline-items/timeline-item/timeline-item-type.enum';
import { TimelineItem } from '../timeline-items/timeline-item/timeline-item.class';

@Injectable({
  providedIn: 'root'
})

export class ChartDataManagerService {
  /**
   * The ChartDataManagerService manages the datasets for the chart.  As filters are applied, the datasets need to be updated.
   */
  constructor() {
    this._dataManager = new ChartDataSetManager([], [], [], -1);
  }

  private _dataSets$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private _dataManager: ChartDataSetManager;
  public get dataSets(): any[] { return this._dataSets$.getValue(); }
  public get dataSets$(): Observable<any[]> { return this._dataSets$.asObservable(); }

  public registerDataManager(dataManager: ChartDataSetManager) {
    this._dataManager = dataManager;
    // console.log('register data manager')
    this._dataManager.getAndUpdateDatasets();
    this._dataManager.datasets$.subscribe({
      next: (datasets) => {
        this._dataSets$.next(datasets);
      },
      error: () => { },
      complete: () => { },
    });
  }

  public updateSignificanceValue(value: number) {
    this._dataManager.updateSignificanceValue(value);
  }
  public updateCategories(categories: TimelineItemType[]) {
    this._dataManager.updateCategories(categories);
  }

  public lookupEventByIndex(datasetIndex: number, index: number) {
    return this._dataManager.lookupTimelineItemByIndex(datasetIndex, index);
  }
  public lookupDataset(datasetIndex: number){
    return this._dataManager.lookupDataset(datasetIndex);
  }
  public lookupIndexByEvent(event: TimelineItem): { datasetIndex: number, itemIndex: number } {
    return this._dataManager.lookupIndexByTimelineItem(event);
  }

  public getTypeColor(type: TimelineItemType, transparency?: number): string {
    return this._dataManager.getTypeColor(type, transparency);
  }



}
