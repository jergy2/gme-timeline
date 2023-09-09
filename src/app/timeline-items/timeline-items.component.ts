import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { TimelineItemsService } from './timeline-items.service';
import { TimelineItem } from './timeline-item/timeline-item.class';
import { ScreeSizeService } from '../scree-size.service';
import { HistoricGMEDataService as GmePriceDataService } from '../historic-gme-data.service';

@Component({
  selector: 'app-timeline-items',
  templateUrl: './timeline-items.component.html',
  styleUrls: ['./timeline-items.component.scss']
})
export class TimelineItemsComponent implements OnInit {
  constructor(private _itemService: TimelineItemsService, private _dataService: GmePriceDataService, private _screenService: ScreeSizeService) { }

  private _selectedItem: TimelineItem | null = null;
  public get selectedItem(): TimelineItem | null { return this._selectedItem; }
  public get displayedTimelineItems(): TimelineItem[] { return this._itemService.displayedTimelineItems; }
  public get timelineItemsMobile(): TimelineItem[] { return this.displayedTimelineItems.sort((itemA, itemB)=>{
    if(itemA.dateYYYYMMDD > itemB.dateYYYYMMDD){
      return -1;
    }else if(itemA.dateYYYYMMDD < itemB.dateYYYYMMDD){
      return 1;
    }else{
      return 0;
    }
  })}
  public get isMobile(): boolean { return this._screenService.isMobile; }

  ngOnInit() {
    this._itemService.itemSelected$.subscribe({
      next: (selected) => {
        this.displayedTimelineItems.forEach(timelineItem => timelineItem.unselect())
        if(selected.item !== null){
          selected.item.select();
          const scrollToElement = document.getElementById(this.itemId(selected.item));
          if(!this.isMobile){
            if(this._isChromeBrowser()){
              scrollToElement?.scrollIntoView({ behavior: "instant", block: "center", inline: "center" });
            }else{
              scrollToElement?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
            }
            
          }else if(this.isMobile){
            // scrollToElement?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
          }
        }else{
        }
      }
    });
  }

  public itemId(item: TimelineItem): string {
    return 'item' + this.displayedTimelineItems.indexOf(item);
  }

  private _isChromeBrowser(): boolean { 
    const agent = window.navigator.userAgent.toLowerCase()
    return (agent.indexOf('chrome') > -1 && !!(<any>window).chrome);
  }
}
