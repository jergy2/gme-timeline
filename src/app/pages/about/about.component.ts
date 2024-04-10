import { Component } from '@angular/core';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {

  constructor(private _titleService: Title){
    this._titleService.setTitle('About gmetimeline.org');
  }

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
