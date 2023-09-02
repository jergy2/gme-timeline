import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TimelineItem } from './timeline-item/timeline-item.class';
import { BaseChartDirective } from 'ng2-charts';

@Injectable({
  providedIn: 'root'
})
export class TimelineItemsService {

  constructor() { }

  private _itemSelected$: Subject<TimelineItem | null> = new Subject();
  public itemSelected$(): Observable<TimelineItem | null> { return this._itemSelected$.asObservable(); }
  public selectItem(item: TimelineItem){ this._itemSelected$.next(item); }
  public unselectItem(){ this._itemSelected$.next(null); }

  public setChart(chart: BaseChartDirective | undefined){
    console.log("chart", chart)
  }

}
