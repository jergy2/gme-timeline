import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ScreenSizeService } from './services/screen-size.service';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public get isMobile(): boolean { return this._sizeService.isMobile; }

  constructor(
    private _sizeService: ScreenSizeService,
    private _router: Router,
    private _settingsService: SettingsService,) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width: number = event.target.innerWidth;
    const height: number = event.target.innerHeight;
    this._sizeService.updateScreenSize(width, height);
  }

  ngOnInit() {
    this._settingsService.getSettings();
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/') {
          this._router.navigate(['/timeline']);
        }else{
        }
      }
    });
  }


}
