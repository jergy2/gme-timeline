import { Component, OnInit } from '@angular/core';
import { FinancialsService } from './financials.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.scss']
})
export class FinancialsComponent implements OnInit {
  constructor(private _financialsService: FinancialsService, private _loadingService: LoadingService){}

  public get isLoading(): boolean { return this._loadingService.dataIsLoading; }
  public get loadingMessage(): string { return this._loadingService.loadingMessage; }


  ngOnInit(){
    this._loadingService.loadData$();
  }
}
