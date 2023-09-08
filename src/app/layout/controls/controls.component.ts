import { Component } from '@angular/core';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { ControlsService } from '../controls.service';
import { trigger, state, style, animate, transition, keyframes, } from '@angular/animations';


@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
  animations: [
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
    // trigger('disappear', [
    //   state('appear', style({
    //     transform: 'translateX(0)',
    //     backgroundColor: 'blue',
    //     opacity: 1,
    //   })),
    //   state('disappear', style({
    //     transform: 'translateX(-100%)',
    //     opacity: 0.3,
    //   })),
    //   transition('void => *', [
    //     style({
    //       transform: 'translateX(-100%)',
    //       opacity: 0.3,
    //     }),
    //     animate(120, style({
    //       opacity: 1,
    //       transform: 'translateX(0)',
    //     }))
    //   ]),
    // ]),
  ]
})
export class ControlsComponent {

  constructor(private _controlsService: ControlsService){}
  public get faSliders() { return faSliders; }

  public get isMinimized(): boolean { return this._controlsService.controlsState === 'MINIMIZED'; }
  public get isExpanded(): boolean { return this._controlsService.controlsState === 'EXPANDED'; }
  public get isPinned(): boolean { return this._controlsService.controlsState === 'PINNED'; }

  public onMouseEnter(){
    this._controlsService.changeControlsState('EXPANDED');
  }
  public onMouseLeave(){
    if(!this.isPinned){
      this._controlsService.changeControlsState('MINIMIZED');
    }
  }

}
