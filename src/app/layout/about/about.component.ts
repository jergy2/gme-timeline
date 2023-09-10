import { Component } from '@angular/core';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, animate, transition, keyframes, } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
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
export class AboutComponent {

  private _aboutIsExpanded: boolean = false;
  public get aboutIsExpanded(): boolean { return this._aboutIsExpanded; }
  public get faQuestion() { return faQuestion; }


  public onMouseEnterAbout() {
    this._aboutIsExpanded = true;
  }
  public onMouseLeaveAbout() {
    this._aboutIsExpanded = false;
  }



}
