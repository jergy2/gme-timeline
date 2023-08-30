import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { TimelineItemsService } from './timeline-items.service';
import { TimelineItem } from './timeline-item/timeline-item.class';
import { timelineItems } from './timeline-items';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { timer } from 'rxjs';

type Position = 'start' | 'mid' | 'end';

@Component({
  selector: 'app-timeline-items',
  templateUrl: './timeline-items.component.html',
  styleUrls: ['./timeline-items.component.scss']
})
export class TimelineItemsComponent implements OnInit {
  constructor(private _itemService: TimelineItemsService, private scroller: ViewportScroller) { }

  // @ViewChild(CdkVirtualScrollViewport) viewPort: CdkVirtualScrollViewport | null = null
  // items = Array.from({ length: 100 }).map((_, i) => `Item #${i}`);

  // scroll(position: Position) {
  //   let scrollIndex: number;
  //   switch (position) {
  //     case 'start':
  //       scrollIndex = 0;
  //       break;
  //     case 'mid':
  //       scrollIndex = this.items.length / 2;
  //       break;
  //     case 'end':
  //       scrollIndex = this.items.length;
  //       break;
  //   }
  //   this.viewPort?.scrollToIndex(scrollIndex, 'smooth');
  // }

  private _selectedItem: TimelineItem | null = null;
  public get selectedItem(): TimelineItem | null { return this._selectedItem; }
  public get timelineItems(): TimelineItem[] { return timelineItems; }

  ngOnInit() {
    this._itemService.itemSelected$().subscribe({
      next: (item) => {
        this.timelineItems.forEach(item => item.unselect())
        item.select();
        // this.scroller.scrollToAnchor(this.itemId(item));
        const scrollToElement = document.getElementById(this.itemId(item));
        scrollToElement?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });

      }
    });
  }

  public itemId(item: TimelineItem): string {
    return 'item' + timelineItems.indexOf(item);
  }

  private _hoveredItem: TimelineItem | null = null;
  public onMouseEnter(item: TimelineItem) {
    this._hoveredItem = item;
    const milliseconds = 600;
    timer(milliseconds).subscribe({
      next: ()=>{
        if(this._hoveredItem !== null){
          this._itemService.selectItem(this._hoveredItem);
        }
      }
    });
    // this._itemService.selectItem(item);
  }
  public onMouseLeave(item: TimelineItem){
    this._hoveredItem = null;
  }

}
