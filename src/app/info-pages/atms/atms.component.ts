import { Component } from '@angular/core';
import { ScreenSizeService } from 'src/app/services/screen-size.service';

@Component({
  selector: 'app-atms',
  templateUrl: './atms.component.html',
  styleUrls: ['./atms.component.scss']
})
export class AtmsComponent {

  constructor(private _screenService: ScreenSizeService){}

  public get isMobile(): boolean { return this._screenService.isMobile; }

}
