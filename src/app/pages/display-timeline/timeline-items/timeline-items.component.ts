import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { TimelineItemsService } from './timeline-items.service';
import { TimelineItem } from './timeline-item/timeline-item.class';
import { ScreeSizeService } from 'src/app/scree-size.service';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-timeline-items',
  templateUrl: './timeline-items.component.html',
  styleUrls: ['./timeline-items.component.scss']
})
export class TimelineItemsComponent implements OnInit, AfterViewInit {
  constructor(private _itemService: TimelineItemsService, private _screenService: ScreeSizeService, private _displayService: DisplayService) { }

  private _selectedItem: TimelineItem | null = null;
  public get selectedItem(): TimelineItem | null { return this._selectedItem; }
  public get displayedTimelineItems(): TimelineItem[] { return this._itemService.displayedTimelineItems; }
  public get timelineItemsDescending(): TimelineItem[] { return this.displayedTimelineItems.sort((itemA, itemB)=>{
    if(itemA.dateYYYYMMDD > itemB.dateYYYYMMDD){
      return -1;
    }else if(itemA.dateYYYYMMDD < itemB.dateYYYYMMDD){
      return 1;
    }else{
      return 0;
    }
  })}
  public get isMobile(): boolean { return this._screenService.isMobile; }
  public get isListView(): boolean { return this._displayService.showAsList; }

  ngOnInit() {
    this._itemService.itemSelected$.subscribe({
      next: (selected) => {
        this.displayedTimelineItems.forEach(timelineItem => timelineItem.unselect())
        if(selected.item !== null){
          selected.item.select();
          const scrollToElement = document.getElementById(this.itemId(selected.item));
          if(!this.isMobile){
            this._scrollIntoView(scrollToElement);
          }else if(this.isMobile){
            // scrollToElement?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
          }
        }else{
        }
      }
    });
    
  }

  ngAfterViewInit(){
    if(!this.isMobile){
      const finalItem = this.displayedTimelineItems[this.displayedTimelineItems.length-1];
      const scrollToElement = document.getElementById(this.itemId(finalItem));
      this._scrollIntoView(scrollToElement);
    }
  }

  private _scrollIntoView(scrollElement: HTMLElement | null){
    if(this._isChromeBrowser()){
      scrollElement?.scrollIntoView({ behavior: "instant", block: "center", inline: "center" });
    }else{
      scrollElement?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    }
  }

  public itemId(item: TimelineItem): string {
    return 'item' + this.displayedTimelineItems.indexOf(item);
  }

  private _isChromeBrowser(): boolean { 
    const agent = window.navigator.userAgent.toLowerCase()
    return (agent.indexOf('chrome') > -1 && !!(<any>window).chrome);
  }
}
