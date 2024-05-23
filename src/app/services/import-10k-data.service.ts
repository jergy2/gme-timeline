import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EarningsResult } from '../pages/earnings/earnings-results/earnings-result.class';
import { EarningsResultInterface } from '../pages/earnings/earnings-results/earnings-result.interface';

@Injectable({
  providedIn: 'root'
})
export class Import10KDataService {

  constructor(private _httpClient: HttpClient) { }

  private _quarterlyResults: EarningsResult[] = [];
  private _annualResults: EarningsResult[] = [];

  public get quarterlyResults(): EarningsResult[] { return this._quarterlyResults; }
  public get annualResults(): EarningsResult[] { return this._annualResults; }
  

  public load10KData$(): Observable<EarningsResult[]> {
    const subject$ = new Subject<EarningsResult[]>();
    const eventsGoogleSheetTsvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT7n4mmCwtjREaCkJVUkHe_ujHBod7vGtEB5iI_kbYToT5dU9cQSq-d3XO2PuFEZ64GCuU70jVayE0R/pub?gid=452534316&single=true&output=tsv';

    /**
     * This variable indexLimitForFiscalYears is based on the data in the Google spreadsheet.
     * 
     * row 1 is the header / label row, so it is skipped (sliced actually, so it is removed entirely)
     * rows 2 to 24 (row index 0 to 22) contain all the FISCAL YEAR DATA.
     * Starting on row 25 (row index 23) of this sheet, the data becomes FISCAL QUARTER data and is separate data.
     * 
     * We set the value of indexLimitForFiscalYears to 22 to represent the final row that should be included when loading FISCAL YEAR (and not FISCAL QUARTER) data.
     * 
     * In the future, when new quarterly or fiscal data is released, new rows will be added to the sheet, and this code must be updated to reflect that!
     */
    const indexLimitForFiscalYears = 22;
 
    this._httpClient.get(eventsGoogleSheetTsvUrl, { responseType: 'text' }).subscribe({
      next: (response) => {
        const results: EarningsResult[] = [];
        let lines = response.split('\n');
        lines = lines.slice(1);
        lines.forEach(line => {
          const index = lines.indexOf(line);
          if(index <= indexLimitForFiscalYears){
            let tabSplitLine = line.split('\t');
            const FyEarningsResult: EarningsResultInterface = {
              fiscalYear: Number(tabSplitLine[0]),
              //quarter column
              filingDateYYYYMMDD: tabSplitLine[2],
              reportDateYYYYMMDD: tabSplitLine[3],
              revenue: Number(tabSplitLine[4]),
              costOfSales: Number(tabSplitLine[5]),
              grossProfit: Number(tabSplitLine[6]),
              sga: Number(tabSplitLine[7]),
              depreciationAmortization: Number(tabSplitLine[8]),
              amortizationGoodWill: Number(tabSplitLine[9]),
              goodwillImpairments: Number(tabSplitLine[10]),
              assetImpairments: Number(tabSplitLine[11]),
              gainOnSale: Number(tabSplitLine[12]),
              mergerExpenses: Number(tabSplitLine[13]),
              operatingExpenses: Number(tabSplitLine[14]),
              otherLoss: Number(tabSplitLine[15]),
              interestIncome: Number(tabSplitLine[16]),
              debtExtinguishment: Number(tabSplitLine[17]),
              mergerInterestExpense: Number(tabSplitLine[18]),
              earningsBeforeIncomeTax: Number(tabSplitLine[19]),
              incomeTaxExpense: Number(tabSplitLine[20]),
              netEarnings: Number(tabSplitLine[21]),
              netEPS: Number(tabSplitLine[22]),
              weightedAverageSharesOutstanding: Number(tabSplitLine[23]),
              totalAssets: Number(tabSplitLine[24]),
              totalDebt: Number(tabSplitLine[25]),
              totalLiabilities: Number(tabSplitLine[26]),
              stockholdersEquity: Number(tabSplitLine[27]),
              drs: Number(tabSplitLine[28]),
              reportingPeriod: 'FY',
            }
            const fYResult: EarningsResult = new EarningsResult(FyEarningsResult);
            results.push(fYResult);
          }
        });
        this._annualResults = results;
        subject$.next(results);
        subject$.complete();
      },
    });
    return subject$.asObservable();
  }


  public loadQuarterlyResults$(): Observable<EarningsResult[]> {
    const subject$ = new Subject<EarningsResult[]>();
    const eventsGoogleSheetTsvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT7n4mmCwtjREaCkJVUkHe_ujHBod7vGtEB5iI_kbYToT5dU9cQSq-d3XO2PuFEZ64GCuU70jVayE0R/pub?gid=452534316&single=true&output=tsv';

    /**
     * This variable indexLimitForFiscalYears is based on the data in the Google spreadsheet.
     * 
     * row 1 is the header / label row, so it is skipped (sliced actually, so it is removed entirely)
     * rows 2 to 24 (row index 0 to 22) contain all the FISCAL YEAR data.
     * rows 25 to 48 (row index 23 to 46) contain all the QUARTERLY data.
    */
    const indexLimitForFiscalYears = 48;
 
    this._httpClient.get(eventsGoogleSheetTsvUrl, { responseType: 'text' }).subscribe({
      next: (response) => {
        const results: EarningsResult[] = [];
        let lines = response.split('\n');
        lines = lines.slice(24);  // remove the first 24 rows;
        lines.forEach(line => {
          const index = lines.indexOf(line);
          if(index <= indexLimitForFiscalYears){
            let tabSplitLine = line.split('\t');
            const earningsResult: EarningsResultInterface = {
              fiscalYear: Number(tabSplitLine[0]),
              //quarter column
              filingDateYYYYMMDD: tabSplitLine[2],
              reportDateYYYYMMDD: tabSplitLine[3],
              revenue: Number(tabSplitLine[4]),
              costOfSales: Number(tabSplitLine[5]),
              grossProfit: Number(tabSplitLine[6]),
              sga: Number(tabSplitLine[7]),
              depreciationAmortization: Number(tabSplitLine[8]),
              amortizationGoodWill: Number(tabSplitLine[9]),
              goodwillImpairments: Number(tabSplitLine[10]),
              assetImpairments: Number(tabSplitLine[11]),
              gainOnSale: Number(tabSplitLine[12]),
              mergerExpenses: Number(tabSplitLine[13]),
              operatingExpenses: Number(tabSplitLine[14]),
              otherLoss: Number(tabSplitLine[15]),
              interestIncome: Number(tabSplitLine[16]),
              debtExtinguishment: Number(tabSplitLine[17]),
              mergerInterestExpense: Number(tabSplitLine[18]),
              earningsBeforeIncomeTax: Number(tabSplitLine[19]),
              incomeTaxExpense: Number(tabSplitLine[20]),
              netEarnings: Number(tabSplitLine[21]),
              netEPS: Number(tabSplitLine[22]),
              weightedAverageSharesOutstanding: Number(tabSplitLine[23]),
              totalAssets: Number(tabSplitLine[24]),
              totalDebt: Number(tabSplitLine[25]),
              totalLiabilities: Number(tabSplitLine[26]),
              stockholdersEquity: Number(tabSplitLine[27]),
              drs: Number(tabSplitLine[28]),
              reportingPeriod: this._getReportingPeriod(tabSplitLine[1]),
            }
            const quarterlyResult: EarningsResult = new EarningsResult(earningsResult);
            results.push(quarterlyResult);
          }
        });
        this._quarterlyResults = results;
        subject$.next(this._quarterlyResults);
        subject$.complete();
      },
    });
    return subject$.asObservable();
  }

  private _getReportingPeriod(cellValue: string): 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'FY' {
    if(cellValue === 'Q4'){
      return 'Q4';
    }else if(cellValue === 'Q3'){
      return 'Q3';
    }else if(cellValue === 'Q2'){
      return 'Q2';
    }else if(cellValue === 'Q1'){
      return 'Q1';
    }else if(cellValue === 'FY'){
      return 'FY';
    }
    return 'FY';
  }

}
