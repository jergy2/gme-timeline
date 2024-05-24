import { Component, OnInit } from '@angular/core';
import { Import10KDataService } from '../../services/import-10k-data.service';
import { LoadingService } from 'src/app/services/loading.service';
import { Title } from '@angular/platform-browser';
import { ScreenSizeService } from 'src/app/services/screen-size.service';

@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.scss']
})
export class EarningsComponent implements OnInit {
  constructor(private _financialsService: Import10KDataService, private _loadingService: LoadingService,
    private titleService: Title,
    private screenService: ScreenSizeService,
  ){
    this.titleService.setTitle('GameStop Income Statements')
  }

  public get isLoading(): boolean { return this._loadingService.dataIsLoading; }
  public get loadingMessage(): string { return this._loadingService.loadingMessage; }
  public get screenWidth(): number { return this.screenService.screenDimensions.width; }


  ngOnInit(){
    this._loadingService.loadData$();
  }
}
