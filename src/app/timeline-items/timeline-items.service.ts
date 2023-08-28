import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TimelineItem } from './timeline-item/timeline-item.class';

@Injectable({
  providedIn: 'root'
})
export class TimelineItemsService {

  constructor() { }

  private _itemSelected$: Subject<TimelineItem> = new Subject();
  public itemSelected$(): Observable<TimelineItem> { return this._itemSelected$.asObservable(); }
  public selectItem(item: TimelineItem){ this._itemSelected$.next(item); }

}
