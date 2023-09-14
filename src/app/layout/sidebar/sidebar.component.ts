import { Component } from '@angular/core';
import { faSliders, faQuestion, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from '../sidebar/sidebar.service';
import { trigger, state, style, animate, transition, keyframes, } from '@angular/animations';
import { DisplayService } from 'src/app/display.service';
import { faCoins, faChartLine, faChartPie } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private _sidebarService: SidebarService, private _displayService: DisplayService){}

  public get displayIsTimeline(): boolean { return this._displayService.displayIsTimeline; }
  public get faCoins(): IconDefinition { return faCoins; }
  public get faChartLine(): IconDefinition { return faChartLine; }
  public get faChartPie(): IconDefinition { return faChartPie; }

}
