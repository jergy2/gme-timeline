import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { SettingsService } from 'src/app/services/settings.service';
import { LoadingService } from 'src/app/services/loading.service';
import { timer } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-display-timeline',
  templateUrl: './display-timeline.component.html',
  styleUrls: ['./display-timeline.component.scss']
})
export class DisplayTimelineComponent implements OnInit{

  constructor(
    private _sizeService: ScreenSizeService, 
    private _settingsService: SettingsService,
    private _loadingService: LoadingService,
    private titleService: Title){
      this.titleService.setTitle('GME Interactive Timeline')
    }

  public get isMobile(): boolean { return this._sizeService.isMobile}
  public get showAsList(): boolean { return this._settingsService.chartListIsVertical; }

  public get isNarrow(): boolean { return this._sizeService.screenDimensions.width < 1050; }
  public get isLoading(): boolean { return this._loadingService.dataIsLoading; }
  public get loadingMessage(): string { return this._loadingService.loadingMessage; }

  async ngOnInit() {

    this._sizeService.screenDimensions$.subscribe({
      next: (dimensions)=>{
        if(dimensions.width < 1050){
        }
      },
    });

    this._loadingService.loadingMessage = "Building chart...";   
    await this._loadingService.loadData$();
  }

}
