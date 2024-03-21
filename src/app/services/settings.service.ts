import { Injectable } from '@angular/core';
import { TimelineEventType } from '../pages/display-timeline/timeline-items/timeline-item/timeline-event-type.enum';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  private _categories: TimelineEventType[] = [];
  private _significanceValue: number = -1;
  private _chartListIsVertical: boolean = false;
  private _chartListIsVertical$: Subject<boolean> = new Subject();

  public get categories(): TimelineEventType[] { return this._categories; }
  public get significanceValue(): number { return this._significanceValue; }
  public get chartListIsVertical(): boolean { return this._chartListIsVertical; }
  public get chartListIsVertical$(): Observable<boolean> { return this._chartListIsVertical$.asObservable(); }

  public getSettings() {
    this._chartListIsVertical = this.getChartListDirection();
    this._categories = this.getCategories();
    this._significanceValue = this.getSignificance();
  }

  public updateCategories(selectedCategories: TimelineEventType[]) {
    // console.log(selectedCategories);
    let categoriesString = '';
    selectedCategories.forEach(category => {
      categoriesString += "'" + category + "', ";
    });
    categoriesString = categoriesString.trimEnd();
    categoriesString = categoriesString.substring(0, categoriesString.length - 1);
    localStorage.setItem('categories', categoriesString);
    this._categories = this.getCategories();
  }
  public updateSignificanceValue(value: number) {
    this._significanceValue = value;
    localStorage.setItem('significance', String(this._significanceValue));
  }
  public updateListDirection(direction: 'VERTICAL' | 'HORIZONTAL'){
    if(direction === 'VERTICAL'){
      this._chartListIsVertical = true;
    }else{
      this._chartListIsVertical = false;
    }
    this._chartListIsVertical$.next(this._chartListIsVertical);
    localStorage.setItem('list_display_direction', direction);
  }

  public getSignificance(): number {
    const significanceStr = localStorage.getItem('significance');
    let significance: number = 3;
    if (significanceStr !== null) {
      significance = Number(significanceStr);
    }
    return significance;
  }

  public getChartListDirection(): boolean { 
    const displayValue = localStorage.getItem('list_display_direction');
    let isVertical: boolean = true;
    if(displayValue !== null){
      if(displayValue === 'HORIZONTAL'){
        isVertical = false;
      }
    }
    return isVertical;
  }

  public getCategories(): TimelineEventType[] {
    const categoriesString = localStorage.getItem('categories');
    const categoriesSplit = categoriesString?.split(", ");
    let categories: TimelineEventType[] = [];
    categoriesSplit?.forEach(category => {
      category = category.substring(1, category.length - 1)
      categories.push(this._resolveCategory(category));
    });
    if (categories.length === 0) {
      categories.push(TimelineEventType.DRS);
      categories.push(TimelineEventType.CORP);
      categories.push(TimelineEventType.RC);
      categories.push(TimelineEventType.MEDIA);
      categories.push(TimelineEventType.SOCIAL_MEDIA);
      categories.push(TimelineEventType.OTHER);
    }
    categories = this._sortCategories(categories);
    return categories;
  }

  private _sortCategories(categories: TimelineEventType[]){
    const priority = [
      TimelineEventType.DRS, TimelineEventType.CORP, TimelineEventType.RC, TimelineEventType.MEDIA, TimelineEventType.SOCIAL_MEDIA, TimelineEventType.OTHER,     
    ];
    const newCategories: TimelineEventType[] = [];
    priority.forEach(priorityItem =>{
      if(categories.indexOf(priorityItem) > -1){
        newCategories.push(priorityItem);
      }
    })
    return newCategories;
  }

  private _resolveCategory(categoryString: string): TimelineEventType {
    let type: TimelineEventType = TimelineEventType.OTHER;
    if (categoryString === 'Corporate') {
      type = TimelineEventType.CORP;
    } else if (categoryString === 'DRS') {
      type = TimelineEventType.DRS;
    } else if (categoryString === 'Media') {
      type = TimelineEventType.MEDIA;
    } else if (categoryString === 'Ryan Cohen') {
      type = TimelineEventType.RC;
    } else if (categoryString === 'Social Media') {
      type = TimelineEventType.SOCIAL_MEDIA;
    } else if (categoryString === 'Other') {
      type = TimelineEventType.OTHER;
    }
    return type;
  }
}
