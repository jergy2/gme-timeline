import { Component, Input } from '@angular/core';
import { LegendItem } from './legend-item.class';

@Component({
  selector: 'app-legend-item',
  templateUrl: './legend-item.component.html',
  styleUrls: ['./legend-item.component.scss']
})
export class LegendItemComponent {

  @Input() legendItem: LegendItem
  constructor(){
    this.legendItem = new LegendItem('','');
  }

}
