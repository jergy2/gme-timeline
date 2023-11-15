import { Component } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import { trigger, state, style, animate, transition, keyframes, } from '@angular/animations';
import { DisplayService } from 'src/app/pages/display-timeline/display.service';
import { faCoins, faChartLine, faChartPie, faSliders, faQuestion, faBars, faCircleInfo, faTableList, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SettingsService } from 'src/app/settings.service';


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
          transform: 'translateX(-270px)',
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
          transform: 'translateX(-270px)',
        }))
      ]),
    ]),
  ]
})
export class SidebarComponent {

  constructor(private _settingsService: SettingsService){}
  public get faCoins(): IconDefinition { return faCoins; }
  public get faChartLine(): IconDefinition { return faChartLine; }
  public get faChartPie(): IconDefinition { return faChartPie; }
  public get faQuestion(): IconDefinition { return faQuestion; }
  public get faBars(): IconDefinition { return faBars; }
  public get faCircleInfo(): IconDefinition { return faCircleInfo; }
  public get faTableList(): IconDefinition { return faTableList; }

  public get showAsList(): boolean { return this._settingsService.chartListIsVertical; }

  private _isOver: boolean = false;
  public get isOver(): boolean { return this._isOver; }
  public onMouseLeave(){
    this._isOver = false;
  }
  public onMouseEnter(){
    this._isOver = true;
  }

}
