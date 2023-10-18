import { Component } from '@angular/core';
import { FinancialsService } from '../financials.service';
import { QuarterlyResult } from '../quarterly-results/quarterly-result.class';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-earnings-table',
  templateUrl: './earnings-table.component.html',
  styleUrls: ['./earnings-table.component.scss']
})
export class EarningsTableComponent {

  constructor(private _financialsService: FinancialsService) { }

  private _quarterlyResults: QuarterlyResult[] = [];
  public get quarterlyResults(): QuarterlyResult[] { return this._quarterlyResults; }

  ngOnInit() {
    this._quarterlyResults = Object.assign([], this._financialsService.quarterlyResults);
    this._quarterlyResults = this._quarterlyResults.sort((item1, item2) => {
      if (item1.filingDateYYYYMMDD > item2.filingDateYYYYMMDD) {
        return -1;
      } else if (item1.filingDateYYYYMMDD < item2.filingDateYYYYMMDD) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  public date(dateYYYYMMDD: string): string {
    return dayjs(dateYYYYMMDD).format('MMM D, YYYY');
  }
  public trimmedYear(year: number): string {
    const date = String(year) + '-01-01';
    return dayjs(date).format('YY');
  }

  public backgroundColor(
    quarterResult: QuarterlyResult,
    column: 'REVENUE' | 'NETINCOME' | 'ASSETS' | 'LIABILITIES' | 'EQUITY' | 'OPERATINGLOSSGAIN' | 'EPS' | 'DRS'
  ): string {
    let propertyValue = quarterResult.revenue;
    let minMax: {min: number, max: number} = {min: 0, max: 0};
    if(column === 'REVENUE'){
      propertyValue = quarterResult.revenue;
      minMax = this._getMinMax(this._quarterlyResults.map(item => item.revenue));
    }else if(column === 'NETINCOME'){
      propertyValue = quarterResult.netIncome;
      minMax = this._getMinMax(this._quarterlyResults.map(item => item.netIncome));
    }else if(column === 'ASSETS'){
      propertyValue = quarterResult.assetsMillions;
      minMax = this._getMinMax(this._quarterlyResults.map(item => item.assetsMillions));
    }else if(column === 'LIABILITIES'){
      propertyValue = quarterResult.liabilitiesMillions;
      minMax = this._getMinMax(this._quarterlyResults.map(item => item.liabilitiesMillions));
      return this._getColor(minMax.min, minMax.max, propertyValue, true);
    }else if(column === 'EQUITY'){
      propertyValue = quarterResult.stockholderEquityMillions;
      minMax = this._getMinMax(this._quarterlyResults.map(item => item.stockholderEquityMillions));
    }else if(column === 'OPERATINGLOSSGAIN'){
      propertyValue = quarterResult.operatingLossGainMillions;
      minMax = this._getMinMax(this._quarterlyResults.map(item => item.operatingLossGainMillions));
    }else if(column === 'EPS'){
      propertyValue = quarterResult.netEarningsLossPerShare;
      minMax = this._getMinMax(this._quarterlyResults.map(item => item.netEarningsLossPerShare));
    }else if(column === 'DRS'){
      return this._getDRSColor(quarterResult.DRSMillions, quarterResult.sharesOutstandingMillions);
    }
      return this._getColor(minMax.min, minMax.max, propertyValue);
  }

  private _getDRSColor(DRSMillions: number, sharesTotal: number): string{
    const percentage = (DRSMillions / sharesTotal) * 100;
    if(percentage === 0){
      return 'rgba(148,23,106,0.00)';
    }else if(percentage > 0 && percentage < 20){
      return 'rgba(148,23,106,0.15)';
    }else if(percentage >= 20 && percentage < 40){
      return 'rgba(148,23,106,0.3)';
    }else if(percentage >= 40 && percentage < 60){
      return 'rgba(148,23,106,0.45)';
    }else if(percentage >= 60 && percentage < 80){
      return 'rgba(148,23,106,0.6)';
    }else{
      return 'rgba(148,23,106,0.75)';
    }
  }

  private _getMinMax(values: number[]):  {min: number, max: number}{
    let min = values[0];
    let max = 0;
    values.forEach(value=>{
      if(value > max){
        max = value;
      }
      if(value < min){
        min = value;
      }
    });
    return {min: min, max: max};;
  }

  private _getColor(min: number, max: number, value: number, reverse: boolean = false) {
    let scale = [
      'rgba(255, 0, 0, 0.07)',
      'rgba(255, 167, 0, 0.07)',
      'rgba(255, 244, 0, 0.07)',
      'rgba(163, 255, 0, 0.07)',
      'rgba(44, 186, 0, 0.07)'
    ];
    if(reverse === true){
      scale = [
        'rgba(44, 186, 0, 0.07)',
        'rgba(163, 255, 0, 0.07)',
        'rgba(255, 244, 0, 0.07)',
        'rgba(255, 167, 0, 0.07)',
        'rgba(255, 0, 0, 0.07)',
      ];
    }
    const scales = scale.length;
    const range = max - min;
    const scaleSize = range / scales;
    const valueDiff = value - min;
    let valueScale = Math.round(valueDiff / scaleSize);
    valueScale--;
    if (valueScale < 0) {
      valueScale = 0;
    }
    return scale[valueScale];
  }


}
