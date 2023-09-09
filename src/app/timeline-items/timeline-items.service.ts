import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { TimelineItem } from './timeline-item/timeline-item.class';

@Injectable({
  providedIn: 'root'
})
export class TimelineItemsService {

  constructor() { }

  private _itemSelected$: Subject<{item: TimelineItem | null, source: 'CHART' | 'ITEMS' | 'NULL'}> = new Subject();
  public get itemSelected$(): Observable<{item: TimelineItem | null, source: 'CHART' | 'ITEMS' | 'NULL'}> { return this._itemSelected$.asObservable(); }
  public selectItem(item: TimelineItem, source: 'CHART' | 'ITEMS') { this._itemSelected$.next({item: item, source: source}); }
  public unselectItem() { this._itemSelected$.next({item: null, source: 'NULL'}); }

  private _allTimelineItems$: BehaviorSubject<TimelineItem[]> = new BehaviorSubject<TimelineItem[]>([]);
  private _displayedTimelineItems$: BehaviorSubject<TimelineItem[]> = new BehaviorSubject<TimelineItem[]>([]);
  public setTimelineItems(items: TimelineItem[]) {
    this._allTimelineItems$.next(items);
    this._displayedTimelineItems$.next(items);
  }
  public get allTimelineItems$(): Observable<TimelineItem[]> { return this._allTimelineItems$.asObservable(); }
  public get allTimelineItems(): TimelineItem[] { return this._allTimelineItems$.getValue(); }

  public get displayedTimelineItems$(): Observable<TimelineItem[]> { return this._displayedTimelineItems$.asObservable(); }
  public get displayedTimelineItems(): TimelineItem[] { return this._displayedTimelineItems$.getValue(); }


  public get stockSplitItem(): TimelineItem | undefined { return this.allTimelineItems.find(item => item.specialIdentifier === 'STOCK-SPLIT'); }

  public onClickStockSplitItem() {
    if (this.stockSplitItem) {
      this.selectItem(this.stockSplitItem, 'ITEMS');
    }
  }

  public updateSignificanceValue(value: number){
    const displayedItems = this.allTimelineItems.filter(item => item.significance >= value);
    this._displayedTimelineItems$.next(displayedItems);
  }

}
