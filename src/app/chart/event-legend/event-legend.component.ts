import { Component, OnInit } from '@angular/core';
import { EventLegendService } from './event-legend.service';
import { LegendItem } from './legend-item/legend-item.class';

@Component({
  selector: 'app-event-legend',
  templateUrl: './event-legend.component.html',
  styleUrls: ['./event-legend.component.scss']
})
export class EventLegendComponent implements OnInit {

  constructor(private _legendService: EventLegendService){}

  private _legendItems: LegendItem[] = [];
  public get legendItems(): LegendItem[] { return this._legendItems; }

  ngOnInit(){
    this._legendItems = this._legendService.dataManager.legendItems;
    console.log(this._legendItems)
  }

}
