import { Component, Input } from '@angular/core';
import { TimelineItem } from '../timeline-item/timeline-item.class';
import { TimelineItemType } from '../timeline-item/timeline-item-type.enum';

@Component({
  selector: 'app-timeline-list-item',
  templateUrl: './timeline-list-item.component.html',
  styleUrls: ['./timeline-list-item.component.scss']
})
export class TimelineListItemComponent {

  private _item: TimelineItem= new TimelineItem({
    title: '',
    dateYYYYMMDD: '',
    urls: [],
    description: '',
    type: [TimelineItemType.OTHER],
    significance: 0,
  }, undefined, -1)
  @Input('item') public set item(item: TimelineItem) { this._item = item; }
  public get item(): TimelineItem { return this._item; }
}
