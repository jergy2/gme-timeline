import { Component, OnInit } from '@angular/core';
import { FinancialsService } from './financials.service';

@Component({
  selector: 'app-financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.scss']
})
export class FinancialsComponent implements OnInit {
  constructor(private _financialsService: FinancialsService){}
  ngOnInit(){
    
  }
}
