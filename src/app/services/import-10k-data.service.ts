import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { QuarterlyResultInterface } from '../pages/financials/quarterly-results/quarterly-result.interface';
import { QuarterlyResult } from '../pages/financials/quarterly-results/quarterly-result.class';
import { FYResultInterface } from '../pages/financials/quarterly-results/fy-result.interface';
import { FYResult } from '../pages/financials/quarterly-results/fy-result.class';

@Injectable({
  providedIn: 'root'
})
export class Import10KDataService {

  constructor(private _httpClient: HttpClient) { }

  private _fileName = 'assets/data/quarterly-results.csv';
  private _quarterlyResults: QuarterlyResult[] = [];
  private _annualResults: FYResult[] = [];

  public get quarterlyResults(): QuarterlyResult[] { return this._quarterlyResults; }
  public get annualResults(): FYResult[] { return this._annualResults; }
  

  public load10KData$(): Observable<FYResult[]> {
    const subject$ = new Subject<FYResult[]>();
    const eventsGoogleSheetTsvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT7n4mmCwtjREaCkJVUkHe_ujHBod7vGtEB5iI_kbYToT5dU9cQSq-d3XO2PuFEZ64GCuU70jVayE0R/pub?gid=452534316&single=true&output=tsv';

    /**
     * This variable indexLimitForFiscalYears is based on the data in the Google spreadsheet.
     * 
     * row 1 is the header / label row, so it is skipped (sliced actually, so it is removed entirely)
     * 
     * rows 2 to 24 (row index 0 to 22) contain all the FISCAL YEAR DATA.
     * 
     * Starting on row 25 (row index 23) of this sheet, the data becomes FISCAL QUARTER data and is separate data.
     * 
     * We set the value of indexLimitForFiscalYears to 22 to represent the final row that should be included when loading FISCAL YEAR (and not FISCAL QUARTER) data.
     * 
     * In the future, when new quarterly or fiscal data is released, new rows will be added to the sheet, and this code must be updated to reflect that!
     */
    const indexLimitForFiscalYears = 22;
 
    this._httpClient.get(eventsGoogleSheetTsvUrl, { responseType: 'text' }).subscribe({
      next: (response) => {
        const results: FYResult[] = [];
        let lines = response.split('\n');
        lines = lines.slice(1);
        lines.forEach(line => {
          const index = lines.indexOf(line);
          if(index <= indexLimitForFiscalYears){
            let tabSplitLine = line.split('\t');
            const fYResultInterface: FYResultInterface = {
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
            }
            const fYResult: FYResult = new FYResult(fYResultInterface);
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


  public loadFinancialResults$(): Observable<QuarterlyResult[]> {
    const subject$ = new Subject<QuarterlyResult[]>();
    this._httpClient.get(this._fileName, { responseType: 'text' },).subscribe(
      (data) => {
        const results = this._parseCSV(data);
        // this._sortData();
        // this._trimData();

        subject$.next(results);
        subject$.complete();
      },
      (error) => {
        console.log("error:", error)
      },
      () => {
        subject$.complete();
      }
    );
    return subject$.asObservable();
  }

  /** Convert CSV table into an array of objects */
  private _parseCSV(data: any) {
    /**
        0 - Year (number)
        1 - Quarter (string)
        2 - link (string)
        3 - link (string)
        4 - date (string)
        5 - date (string)
        6 - revenue (number)
        7 - (number)
        8 - (number)
        9 - (number)
        10 - (number)
        11 - (number)
        12 - (number)
        13 - (number)
        14 - (number)
        15 - (number)
        16 - (number)
        17 - (string)
     */
    const rows = data.split('\n');
    const headers = rows[0].split(',');
    const rowCount = rows.length;
    const cellRows: QuarterlyResultInterface[] = [];
    for (let rowIndex = 1; rowIndex < rowCount; rowIndex++) {
      const splitRow: string[] = rows[rowIndex].split(',');
      const cells: (string | number)[] = [];
      for (let column = 0; column < splitRow.length; column++) {
        if (column < 6) {
          if (column === 0) {
            cells.push(Number(splitRow[column]));
          } else {
            cells.push(String(splitRow[column]));
          }
        } else if (column === 17) {
          const sankeySrc = String(splitRow[column]);
          if (sankeySrc.length > 1) {
            cells.push(sankeySrc);
          } else {
            cells.push('');
          }
        } else {
          cells.push(Number(splitRow[column]));
        }
      }
      // console.log("CELLS", cells)
      cellRows.push(this._getResult(cells))
    }
    const results = cellRows.map(row => new QuarterlyResult(row));
    this._quarterlyResults = results;
    return results
  }

  private _getResult(cells: any[]): QuarterlyResultInterface {
    return {
      year: cells[0],
      quarter: cells[1],
      tenQKformLink: cells[2],
      newsReleaseLink: cells[3],
      filingDateYYYYMMDD: cells[4],
      documentDateYYYYMMDD: cells[5],
      assetsMillions: cells[6],
      liabilitiesMillions: cells[7],
      stockholderEquityMillions: cells[8],
      netSalesMillions: cells[9],
      costOfSalesMillions: cells[10],
      grossProfitMillions: cells[11],
      operatingLossGainMillions: cells[12],
      netLossGainMillions: cells[13],
      sharesOutstandingMillions: cells[14],
      DRSMillions: cells[15],
      netEarningsLossPerShare: cells[16],
      sankeyChartImg: cells[17],
    }
  }

}
