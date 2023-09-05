import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { TimelineItem } from './timeline-item/timeline-item.class';

@Injectable({
  providedIn: 'root'
})
export class TimelineItemsService {

  constructor() { }

  private _itemSelected$: Subject<TimelineItem | null> = new Subject();
  public itemSelected$(): Observable<TimelineItem | null> { return this._itemSelected$.asObservable(); }
  public selectItem(item: TimelineItem) { this._itemSelected$.next(item); }
  public unselectItem() { this._itemSelected$.next(null); }

  private _timelineItems$: BehaviorSubject<TimelineItem[]> = new BehaviorSubject<TimelineItem[]>([]);
  public setTimelineItems(items: TimelineItem[]) {
    this._timelineItems$.next(items);
  }
  public get timelineItems$(): Observable<TimelineItem[]> { return this._timelineItems$.asObservable(); }
  public get timelineItems(): TimelineItem[] { return this._timelineItems$.getValue(); }

  public get stockSplitItem(): TimelineItem | undefined { return this.timelineItems.find(item => item.specialIdentifier === 'STOCK-SPLIT'); }

  public onClickStockSplitItem() {
    if (this.stockSplitItem) {
      this.selectItem(this.stockSplitItem);
    }
  }

}
