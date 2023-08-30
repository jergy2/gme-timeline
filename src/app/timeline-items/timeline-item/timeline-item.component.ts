import { Component, Input } from '@angular/core';
import { TimelineItem } from './timeline-item.class';
import { TimelineItemType } from './timeline-item-type.enum';
import * as dayjs from 'dayjs';
import { EventLegendService } from 'src/app/chart/event-legend/event-legend.service';
import { ScreeSizeService } from 'src/app/scree-size.service';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent {

  constructor(private _eventService: EventLegendService, private _sizeService: ScreeSizeService) {}

  private _item: TimelineItem = new TimelineItem({
    title:'',
    dateYYYYMMDD: '',
    urls: [],
    description: '',
    type: TimelineItemType.EVENT,
    significance: 0,
  })
  @Input('item') public set item(item: TimelineItem) { this._item = item; }
  public get item(): TimelineItem { return this._item;}

  public get isMobile(): boolean { return this._sizeService.isMobile; }

  public date(dateYYYYMMDD: string): string{
    return dayjs(dateYYYYMMDD).format('MMMM D, YYYY')
  }


  public get ngStyle(){
    if(this.item.isSelected){
      return {
        'background-color': this._eventService.getTypeColor(this.item.type, 0.8),
        'border': '3px solid ' + this._eventService.getTypeColor(this.item.type, 1),
        'color': 'white',
      }
    }else{
      return {
        'background-color': this._eventService.getTypeColor(this.item.type, 0.05),
        'border': '1px solid ' + this._eventService.getTypeColor(this.item.type, 0.5),
      }
    }

  }
}
