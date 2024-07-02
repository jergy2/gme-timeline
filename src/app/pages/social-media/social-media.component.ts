import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ScreenSizeService } from 'src/app/services/screen-size.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent {
  constructor(private _titleService: Title, private _screenService: ScreenSizeService){
    this._titleService.setTitle('GME Social Media');
  }
}
