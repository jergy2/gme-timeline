import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, } from '@angular/animations';
import { DisplayService } from 'src/app/pages/display-timeline/display.service';
import { faCoins, faChartLine, faChartPie, faSliders, faQuestion, faBars, faCircleInfo, faTableList, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SettingsService } from 'src/app/services/settings.service';
import { Router } from '@angular/router';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { timer } from 'rxjs';


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
export class SidebarComponent implements OnInit, AfterViewInit {

  constructor(private _settingsService: SettingsService, private _router: Router, private _renderer: Renderer2, private _screenService: ScreenSizeService) { }
  public get faCoins(): IconDefinition { return faCoins; }
  public get faChartLine(): IconDefinition { return faChartLine; }
  public get faChartPie(): IconDefinition { return faChartPie; }
  public get faQuestion(): IconDefinition { return faQuestion; }
  public get faBars(): IconDefinition { return faBars; }
  public get faCircleInfo(): IconDefinition { return faCircleInfo; }
  public get faTableList(): IconDefinition { return faTableList; }

  public get showAsList(): boolean { return this._settingsService.chartListIsVertical; }



  ngOnInit(): void {
    this._renderer.listen('window', 'click', (e: Event) => {
      if (this.menuButtonElement){
        if(!this.menuButtonElement.nativeElement.contains(e.target)){
        }else{
        }
      }
        
    });
    this._router.events.subscribe((event)=>{
    })
  }

  public get browser(): string { return this._screenService.browser; }
  public get browserIsSafari(): boolean { return this._screenService.browserIsSafari; }

  private _message: string = '';
  public get message(): string { return this._message; }

  ngAfterViewInit() {
  }

  @ViewChild('menu') menuButtonElement: ElementRef | null = null;

  private _menuIsOpen: boolean = false;
  public get menuIsOpen(): boolean { return this._menuIsOpen; }
  public onMouseLeave() {
    this._menuIsOpen = false;
  }
  private _clicked = false;
  public onClick() {
    if(this._screenService.isLargeScreen){
      
    }else{
      this._menuIsOpen = !this._menuIsOpen;
      this._clicked = true;
    }
  }
  public onMouseEnter() {
    if(!this._clicked){
      this._menuIsOpen = true;
    }else{
      this._clicked = false;
    }
    
  }

}
