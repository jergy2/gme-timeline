import { Component, OnInit } from '@angular/core';
import { Import10KDataService } from '../../services/import-10k-data.service';
import { LoadingService } from 'src/app/services/loading.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.scss']
})
export class FinancialsComponent implements OnInit {
  constructor(private _financialsService: Import10KDataService, private _loadingService: LoadingService,
    private titleService: Title
  ){
    this.titleService.setTitle('GameStop Income Statements')
  }

  public get isLoading(): boolean { return this._loadingService.dataIsLoading; }
  public get loadingMessage(): string { return this._loadingService.loadingMessage; }


  ngOnInit(){
    this._loadingService.loadData$();
  }
}
