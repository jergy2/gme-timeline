import { Component } from '@angular/core';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, animate, transition, keyframes, } from '@angular/animations';
import { SidebarService } from 'src/app/layout/sidebar/sidebar.service';
import { ScreeSizeService } from 'src/app/scree-size.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
  animations: [
    // trigger('expandShrink', [
    //   state('expand', style({
    //     opacity: 1,
    //     backgroundColor: 'yellow',
    //     borderRadius: '15px',
    //   })),
    //   state('shrink', style({
    //     opacity: 0.5,
    //     backgroundColor: 'green',
    //     borderRadius: '50px',
    //   })),
    //   transition('expand => shrink', [
    //     animate('1s')
    //   ]),
    //   transition('shrink => expand', [
    //     animate('0.5s')
    //   ]),
    //   transition('* => shrink', [
    //     animate('1s')
    //   ]),
    //   transition('* => expand', [
    //     animate('0.5s')
    //   ]),
    //   transition('expand <=> shrink', [
    //     animate('0.5s')
    //   ]),
    //   transition ('* => expand', [
    //     animate ('1s',
    //       style ({ opacity: '*' }),
    //     ),
    //   ]),
    //   transition('* => *', [
    //     animate('1s')
    //   ]),
    // ]),
    trigger('appear', [
      state('appear', style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      // state('disappear', style({
      //   transform: 'translateX(-100%)',
      //   opacity: 0.3,
      // })),
      transition('void => *', [
        style({
          transform: 'translateY(-50px)',
          opacity: 0.3,
        }),
        animate(120, style({
          opacity: 1,
          transform: 'translateY(0)',
        }))
      ]),
      transition('* => void', [
        style({
          transform: 'translateY(0)',
          opacity: 1,
        }),
        animate(120, style({
          opacity: 0.3,
          transform: 'translateY(-50px)',
        }))
      ]),
    ]),
  ]
})
export class ControlsComponent {

  constructor(private _sidebarService: SidebarService, private _sizeService: ScreeSizeService){}

  public get faSliders() { return faSliders; }

  public get isMinimized(): boolean { return this._sidebarService.controlsState === 'MINIMIZED'; }
  public get isExpanded(): boolean { return this._sidebarService.controlsState === 'EXPANDED'; }
  public get isPinned(): boolean { return this._sidebarService.controlsState === 'PINNED'; }

  public get isMobile(): boolean { return this._sizeService.isMobile; }

  public onMouseEnterControls(){
    this._sidebarService.changeControlsState('EXPANDED');
  }
  public onMouseLeaveControls(){
    if(!this.isPinned){
      this._sidebarService.changeControlsState('MINIMIZED');
    }
  }

}
