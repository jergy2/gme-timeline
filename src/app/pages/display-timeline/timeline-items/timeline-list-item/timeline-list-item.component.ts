import { Component, Input } from '@angular/core';
import { TimelineEvent } from '../timeline-item/timeline-event';
import { TimelineEventType } from '../timeline-item/timeline-event-type.enum';
import { ChartDataManagerService } from '../../chart/chart-data-manager-service';
import { ScreeSizeService } from 'src/app/services/scree-size.service';
import { TimelineItemsService } from '../timeline-items.service';
import { urlType } from '../timeline-item/timeline-event-url.interface';

@Component({
  selector: 'app-timeline-list-item',
  templateUrl: './timeline-list-item.component.html',
  styleUrls: ['./timeline-list-item.component.scss']
})
export class TimelineListItemComponent {

  constructor(private _chartDataService: ChartDataManagerService, 
    private _sizeService: ScreeSizeService, 
    private _itemService: TimelineItemsService){

  }
  private _item: TimelineEvent= new TimelineEvent({
    title: '',
    dateYYYYMMDD: '',
    urls: [],
    description: '',
    types: [TimelineEventType.OTHER],
    significance: 0, tags: [],
  }, undefined, -1)
  @Input('item') public set item(item: TimelineEvent) { this._item = item; }
  public get item(): TimelineEvent { return this._item; }

  public get isMobile(): boolean { return this._sizeService.isMobile; }

  public onClickItem(item: TimelineEvent){
    this._itemService.selectItem(item, 'ITEMS');
  }

  public linkTypeIsOther(linkType: urlType) {
    if (linkType !== 'LEMMY' && linkType !== 'REDDIT' && linkType !== 'WIKIPEDIA'
      && linkType !== 'YOUTUBE' && linkType !== 'NEWS' && linkType !== 'DOCUMENT'
      && linkType !== 'GAMESTOP' && linkType !== 'X-TWITTER') {
      return true;
    }
    return false;
  }

  public get ngStyle() {
    if (this.item.isSelected) {
      if(this.isMobile){
        return { // if is selected and is mobile
          'background-color': this._chartDataService.getTypeColor(this.item.mainType, 0.9),
          'border-left': '2px solid ' + this._chartDataService.getTypeColor(this.item.mainType, 1),
          'border-right': '2px solid ' + this._chartDataService.getTypeColor(this.item.mainType, 1),
          'color': 'white',
          'padding-top': '15px',
          'padding-bottom': '15px',
        }
      }else{
        return { // if is selected and is not mobile
          'background-color': this._chartDataService.getTypeColor(this.item.mainType, 0.7),
          'border': '2px solid ' + this._chartDataService.getTypeColor(this.item.mainType, 1),
          'color': 'white',
        }
      }
      
    } else { // if not selected
      if(this.isMobile){ // if mobile and not selected
        return {
          'background-color': this._chartDataService.getTypeColor(this.item.mainType, 0.05),
          'border-left': '1px solid ' + this._chartDataService.getTypeColor(this.item.mainType, 0.5),
          'border-right': '1px solid ' + this._chartDataService.getTypeColor(this.item.mainType, 0.5),
          'padding-top': '15px',
          'padding-bottom': '15px',
        }
      }else{
        return { // if not mobile and not selected
          'background-color': this._chartDataService.getTypeColor(this.item.mainType, 0.05),
          'border': '1px solid ' + this._chartDataService.getTypeColor(this.item.mainType, 0.5),
        }
      }

    }

  }
}
