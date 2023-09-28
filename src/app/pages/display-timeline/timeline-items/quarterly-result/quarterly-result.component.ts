import { Component, Input, OnInit} from '@angular/core';
import { QuarterlyResult } from 'src/app/pages/financials/quarterly-results/quarterly-result.class';

@Component({
  selector: 'app-quarterly-result',
  templateUrl: './quarterly-result.component.html',
  styleUrls: ['./quarterly-result.component.scss']
})
export class QuarterlyResultComponent implements OnInit {

  private _result: QuarterlyResult | null = null;
  @Input('result') public set result(result: QuarterlyResult) { this._result = result; }
  public get result(): QuarterlyResult | null { return this._result; }

  ngOnInit(): void {
  }
  public get eps(){
    return Number(this.result?.netEarningsLossPerShare).toFixed(2);
  }

  public get isPositive(): boolean { 
    if(this.result){
      if(this.result.netEarningsLossPerShare > 0 ){ 
        return true;
      }
    }
    return false;
  }

  public get drsPercent(): string{
    if(this.result){
      return ((this.result.DRSMillions / this.result.sharesOutstandingMillions) * 100 ).toFixed(2);
    }
    return '';
  }
}
