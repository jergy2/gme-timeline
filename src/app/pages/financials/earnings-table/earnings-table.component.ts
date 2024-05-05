import { Component } from '@angular/core';
import { Import10KDataService } from '../../../services/import-10k-data.service';
import { QuarterlyResult } from '../quarterly-results/quarterly-result.class';
import * as dayjs from 'dayjs';
import { YearlyResult } from '../quarterly-results/yearly-result.class';
import { IconDefinition, faNoteSticky, faSquareMinus, faSquarePlus, faLink, faFile } from '@fortawesome/free-solid-svg-icons';
import { EarningsTableRow } from './earnings-table-row.class';
import { releaseOverviews } from './release-overview/release-overviews';

@Component({
  selector: 'app-earnings-table',
  templateUrl: './earnings-table.component.html',
  styleUrls: ['./earnings-table.component.scss']
})
export class EarningsTableComponent {

  constructor(private _financialsService: Import10KDataService) { }


  public get faNoteSticky(): IconDefinition { return faNoteSticky; }
  public get faSquarePlus(): IconDefinition { return faSquarePlus; }
  public get faSquareMinus(): IconDefinition { return faSquareMinus; }
  public get faLink(): IconDefinition { return faLink; }
  public get faFile(): IconDefinition { return faFile; }

  private _displayMode: 'QUARTER' | 'ANNUAL' = 'ANNUAL';
  public get displayMode(): 'QUARTER' | 'ANNUAL' { return this._displayMode; }
  public get displayIsAnnual(): boolean { return this._displayMode === 'ANNUAL'; }
  public get displayIsQuarter(): boolean { return this._displayMode === 'QUARTER'; }

  private _tableRows: EarningsTableRow[] = [];
  public get tableRows(): EarningsTableRow[] { return this._tableRows; }

  ngOnInit() {
    this._buildTableRows();
  }

  private _buildTableRows() {
    let results: QuarterlyResult[] | YearlyResult[];
    if (this._displayMode === 'QUARTER') {
      results = this._buildQuarterlyResults();
    } else {
      results = this._buildYearlyResults();
    }
    this._tableRows = results.map(result => new EarningsTableRow(result, releaseOverviews));
  }

  private _buildQuarterlyResults() {
    let quarterlyResults: QuarterlyResult[] = Object.assign([], this._financialsService.quarterlyResults);
    quarterlyResults = quarterlyResults.sort((item1, item2) => {
      if (item1.filingDateYYYYMMDD > item2.filingDateYYYYMMDD) {
        return -1;
      } else if (item1.filingDateYYYYMMDD < item2.filingDateYYYYMMDD) {
        return 1;
      } else {
        return 0;
      }
    });
    return quarterlyResults;
  }

  private _buildYearlyResults(): YearlyResult[] {
    let quarterlyResults: QuarterlyResult[] = this._buildQuarterlyResults();
    let years: number[] = [];
    const yearlyResults: YearlyResult[] = [];
    quarterlyResults.map(result => result.fiscalYear).forEach(year => {
      if (years.indexOf(year) === -1) {
        years.push(year);
      }
    });
    years.forEach(year => {
      let yearQuarters = quarterlyResults.filter(result => result.fiscalYear === year)
      const fullYear = new YearlyResult(yearQuarters);
      yearlyResults.push(fullYear);
    });
    return yearlyResults;
  }

  public onClickQuartersYears(value: 'QUARTERS' | 'YEARS') {
    if (value === 'QUARTERS') {
      this._displayMode = 'QUARTER';
    } else {
      this._displayMode = 'ANNUAL';
    }
    this._buildTableRows();
  }

  public date(dateYYYYMMDD: string): string {
    return dayjs(dateYYYYMMDD).format('MMM D, YYYY');
  }
  public trimmedYear(year: number): string {
    const date = String(year) + '-01-01';
    return dayjs(date).format('YY');
  }

  public backgroundColor(
    quarterResult: QuarterlyResult | YearlyResult,
    column: 'REVENUE' | 'NETINCOME' | 'ASSETS' | 'LIABILITIES' | 'EQUITY' | 'OPERATINGLOSSGAIN' | 'EPS' | 'DRS'
  ): string {
    let propertyValue = quarterResult.revenue;
    let minMax: { min: number, max: number } = { min: 0, max: 0 };

    const results: (QuarterlyResult | YearlyResult)[] = this.tableRows.map(row => row.earningsResult);

    if (column === 'REVENUE') {
      propertyValue = quarterResult.revenue;
      minMax = this._getMinMax(results.map(item => item.revenue));
      return this._getColor(0, minMax.max, propertyValue);
    } else if (column === 'NETINCOME') {
      propertyValue = quarterResult.netIncome;
      return this._getColorZeroBased(propertyValue);
    } else if (column === 'ASSETS') {
      propertyValue = quarterResult.assetsMillions;
      return this._getColorZeroBased(propertyValue);
    } else if (column === 'LIABILITIES') {
      propertyValue = quarterResult.liabilitiesMillions;
      minMax = this._getMinMax(results.map(item => item.liabilitiesMillions));
      return this._getColor(minMax.min, minMax.max, propertyValue, true);
    } else if (column === 'EQUITY') {
      propertyValue = quarterResult.stockholderEquityMillions;
      return this._getColorZeroBased(propertyValue);
    } else if (column === 'OPERATINGLOSSGAIN') {
      propertyValue = quarterResult.operatingLossGainMillions;
      return this._getColorZeroBased(propertyValue);
    } else if (column === 'EPS') {
      propertyValue = quarterResult.netEarningsLossPerShare;
      return this._getColorZeroBased(propertyValue);
    } else if (column === 'DRS') {
      return this._getDRSColor(quarterResult.DRSMillions, quarterResult.sharesOutstandingMillions);
    }
    return '';
  }

  private _getDRSColor(DRSMillions: number, sharesTotal: number): string {
    const percentage = (DRSMillions / sharesTotal) * 100;
    if (percentage === 0) {
      return 'rgba(148,23,106,0.00)';
    } else if (percentage > 0 && percentage < 20) {
      return 'rgba(148,23,106,0.15)';
    } else if (percentage >= 20 && percentage < 40) {
      return 'rgba(148,23,106,0.3)';
    } else if (percentage >= 40 && percentage < 60) {
      return 'rgba(148,23,106,0.45)';
    } else if (percentage >= 60 && percentage < 80) {
      return 'rgba(148,23,106,0.6)';
    } else {
      return 'rgba(148,23,106,0.75)';
    }
  }

  private _getMinMax(values: number[]): { min: number, max: number } {
    let min = values[0];
    let max = 0;
    values.forEach(value => {
      if (value > max) {
        max = value;
      }
      if (value < min) {
        min = value;
      }
    });
    return { min: min, max: max };;
  }

  private _getColorZeroBased(value: number) {
    /**
     *  negative numbers: red
     * 
     *  zero: white
     * 
     *  positive numbers: green
     * 
     */
    if (value < 0) {
      return 'rgba(255, 0, 0, 0.07)';
    } else if (value === 0) {
      return 'rgb(255, 255, 255)';
    } else if (value > 0) {
      return 'rgba(44, 186, 0, 0.07)';
    }
    return 'rgb(255, 255, 255)';

  }

  private _getColor(min: number, max: number, value: number, reverse: boolean = false) {
    let scale = [
      'rgba(255, 0, 0, 0.07)',
      'rgba(255, 167, 0, 0.07)',
      'rgba(255, 244, 0, 0.07)',
      'rgba(163, 255, 0, 0.07)',
      'rgba(44, 186, 0, 0.07)'
    ];
    if (reverse === true) {
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
