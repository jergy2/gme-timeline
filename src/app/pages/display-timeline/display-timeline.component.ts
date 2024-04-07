import { Component, OnInit } from '@angular/core';
import { ScreeSizeService } from 'src/app/services/scree-size.service';
import { SettingsService } from 'src/app/services/settings.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-display-timeline',
  templateUrl: './display-timeline.component.html',
  styleUrls: ['./display-timeline.component.scss']
})
export class DisplayTimelineComponent implements OnInit{

  constructor(
    private _sizeService: ScreeSizeService, 
    private _settingsService: SettingsService,
    private _loadingService: LoadingService){}

  public get isMobile(): boolean { return this._sizeService.isMobile}
  public get showAsList(): boolean { return this._settingsService.chartListIsVertical; }

  public get isNarrow(): boolean { return this._sizeService.screenDimensions.width < 1050; }
  public get isLoading(): boolean { return this._loadingService.dataIsLoading; }
  public get loadingMessage(): string { return this._loadingService.loadingMessage; }

  ngOnInit() {

    this._sizeService.screenDimensions$.subscribe({
      next: (dimensions)=>{
        if(dimensions.width < 1050){
        }
      },
    });
    // await lastValueFrom(timer(100));
    this._loadingService.loadData$();
  }

}
