import { Component, Input } from '@angular/core';
import { TimelineItem } from './timeline-item.class';
import { TimelineItemType } from './timeline-item-type.enum';
import * as dayjs from 'dayjs';
import { ScreeSizeService } from 'src/app/scree-size.service';
import { urlType } from './timeline-item-url.interface';
import { TimelineItemsService } from '../timeline-items.service';
import { ChartDataManagerService } from '../../chart/chart-data-manager-service';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent {

  constructor(private _eventService: ChartDataManagerService, private _sizeService: ScreeSizeService, private _itemService: TimelineItemsService) { }

  private _item: TimelineItem = new TimelineItem({
    title: '',
    dateYYYYMMDD: '',
    urls: [],
    description: '',
    type: [TimelineItemType.OTHER],
    significance: 0,
  }, undefined, -1)
  @Input('item') public set item(item: TimelineItem) { this._item = item; }
  public get item(): TimelineItem { return this._item; }

  public get isMobile(): boolean { return this._sizeService.isMobile; }

  public get ngClass(): any { 
    const mobileExpanded = this.isMobile && this.item.isSelected;
    const mobileNotExpanded = this.isMobile && !this.item.isSelected;
    const notMobileExpanded = !this.isMobile && this.item.isSelected;
    const notMobileNotExpanded = !this.isMobile && !this.item.isSelected;
    if(mobileExpanded){
      return 'mobile-expanded';
    }else if(mobileNotExpanded){
      return 'mobile-not-expanded';
    }else if(notMobileExpanded){
      return 'not-mobile-expanded';
    }else if(notMobileNotExpanded){
      return 'not-mobile-not-expanded';
    }
  }


  public onClickSplit(){ this._itemService.onClickStockSplitItem(); }

  public date(dateYYYYMMDD: string): string {
    return dayjs(dateYYYYMMDD).format('MMMM D, YYYY')
  }

  public linkTypeIsOther(linkType: urlType) {
    if (linkType !== 'LEMMY' && linkType !== 'REDDIT' && linkType !== 'WIKIPEDIA'
      && linkType !== 'YOUTUBE' && linkType !== 'NEWS' && linkType !== 'DOCUMENT'
      && linkType !== 'GAMESTOP' && linkType !== 'X-TWITTER') {
      return true;
    }
    return false;
  }

  public onClickClose(){
    this._itemService.unselectItem();
  }

  public onClickItem(item: TimelineItem){
    this._itemService.selectItem(item, 'ITEMS');
}

  public get ngStyle() {
    if (this.item.isSelected) {
      if(this.isMobile){
        return { // if is selected and is mobile
          'background-color': this._eventService.getTypeColor(this.item.type, 0.9),
          'border-left': '3px solid ' + this._eventService.getTypeColor(this.item.type, 1),
          'border-right': '3px solid ' + this._eventService.getTypeColor(this.item.type, 1),
          'color': 'white',
          'padding-top': '15px',
          'padding-bottom': '15px',
        }
      }else{
        return { // if is selected and is not mobile
          'background-color': this._eventService.getTypeColor(this.item.type, 0.9),
          'border': '3px solid ' + this._eventService.getTypeColor(this.item.type, 1),
          'color': 'white',
        }
      }
      
    } else { // if not selected
      if(this.isMobile){ // if mobile and not selected
        return {
          'background-color': this._eventService.getTypeColor(this.item.type, 0.05),
          'border-left': '1px solid ' + this._eventService.getTypeColor(this.item.type, 0.5),
          'border-right': '1px solid ' + this._eventService.getTypeColor(this.item.type, 0.5),
          'padding-top': '15px',
          'padding-bottom': '15px',
        }
      }else{
        return { // if not mobile and not selected
          'background-color': this._eventService.getTypeColor(this.item.type, 0.05),
          'border': '1px solid ' + this._eventService.getTypeColor(this.item.type, 0.5),
        }
      }

    }

  }
}
