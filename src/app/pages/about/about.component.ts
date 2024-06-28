import { Component } from '@angular/core';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';
import { ScreenSizeService } from 'src/app/services/screen-size.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {

  constructor(private _titleService: Title, private _screenService: ScreenSizeService){
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

  public get isMobile(): boolean { return this._screenService.isMobile; }


}
