import { Component } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import { trigger, state, style, animate, transition, keyframes, } from '@angular/animations';
import { DisplayService } from 'src/app/display.service';
import { faCoins, faChartLine, faChartPie, faSliders, faQuestion, IconDefinition } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('appear', [
      state('appear', style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      transition('void => *', [
        style({
          transform: 'translateX(+270px)',
          opacity: 0.3,
        }),
        animate(120, style({
          opacity: 1,
          transform: 'translateX(0)',
        }))
      ]),
      transition('* => void', [
        style({
          transform: 'translateX(0)',
          opacity: 1,
        }),
        animate(120, style({
          opacity: 0.3,
          transform: 'translateX(+270px)',
        }))
      ]),
    ]),
  ]
})
export class SidebarComponent {

  constructor(private _sidebarService: SidebarService, private _displayService: DisplayService){}

  // public get displayIsTimeline(): boolean { return this._displayService.displayIsTimeline; }
  public get faCoins(): IconDefinition { return faCoins; }
  public get faChartLine(): IconDefinition { return faChartLine; }
  public get faChartPie(): IconDefinition { return faChartPie; }
  public get faQuestion(): IconDefinition { return faQuestion; }

  private _isOverAbout: boolean = false;
  public get isOverAbout(): boolean { return this._isOverAbout; }
  public onMouseLeaveAbout(){
    this._isOverAbout = false;
  }
  public onMouseEnterAbout(){
    this._isOverAbout = true;
  }

}
