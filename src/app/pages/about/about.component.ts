import { Component } from '@angular/core';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, animate, transition, keyframes, } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
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
