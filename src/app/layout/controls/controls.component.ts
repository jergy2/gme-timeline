import { Component } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
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
export class ControlsComponent {

  constructor(private _sidebarService: SidebarService){}

  public get faSliders() { return faSliders; }

  public get isMinimized(): boolean { return this._sidebarService.controlsState === 'MINIMIZED'; }
  public get isExpanded(): boolean { return this._sidebarService.controlsState === 'EXPANDED'; }
  public get isPinned(): boolean { return this._sidebarService.controlsState === 'PINNED'; }

  public onMouseEnterControls(){
    this._sidebarService.changeControlsState('EXPANDED');
  }
  public onMouseLeaveControls(){
    if(!this.isPinned){
      this._sidebarService.changeControlsState('MINIMIZED');
    }
  }

}
