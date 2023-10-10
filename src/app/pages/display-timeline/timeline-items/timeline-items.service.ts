import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { TimelineItem } from './timeline-item/timeline-item.class';
import { TimelineItemType } from './timeline-item/timeline-item-type.enum';
import { QuarterlyResult } from '../../financials/quarterly-results/quarterly-result.class';

@Injectable({
  providedIn: 'root'
})
export class TimelineItemsService {

  constructor() { }

  private _significanceValue: number = 1;
  private _itemCategories: TimelineItemType[] = [
    TimelineItemType.CORP, TimelineItemType.SOCIAL_MEDIA, TimelineItemType.DRS, TimelineItemType.MEDIA, TimelineItemType.OTHER, TimelineItemType.RC,
  ];

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
    this._significanceValue = value;
    this._update();
  }
  public updateCategories(categories: TimelineItemType[]){
    this._itemCategories = categories;
    this._update();
  }

  private _update(){
    const displayedItems = this.allTimelineItems.filter(item => {
      const showBySignificance: boolean = item.significance >= this._significanceValue;
      let showByCategory: boolean = false;
      item.types.forEach(type =>{
        if(this._itemCategories.indexOf(type) > -1){
          showByCategory = true;
        }
      });
      return showBySignificance && showByCategory;
    });
    // displayedItems.forEach(item => {
    //   if(item.types.length > 1){
    //     // console.log("ITEM has more than 1 type:", item.title, item.types)
    //   }
    // })
    this._displayedTimelineItems$.next(displayedItems);
  }

  public setQuarterlyFinancialResults(results: QuarterlyResult[]){
    this.allTimelineItems.forEach(item =>{ 
      results.forEach(result =>{
        if(item.dateYYYYMMDD === result.filingDateYYYYMMDD && item.types.indexOf(TimelineItemType.CORP) > -1){
          item.setQuarterlyFinancialResult(result);
        }
      });
    });
  }

}
