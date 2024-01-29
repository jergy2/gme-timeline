import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { QuarterlyResultInterface } from './quarterly-results/quarterly-result.interface';
import { QuarterlyResult } from './quarterly-results/quarterly-result.class';

@Injectable({
  providedIn: 'root'
})
export class FinancialsService {

  constructor(private _httpClient: HttpClient) { }

  private _fileName = 'assets/data/quarterly-results.csv';
  private _results: QuarterlyResult[] = [];
  public get quarterlyResults(): QuarterlyResult[] { return this._results; }

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
      for(let column = 0; column < splitRow.length; column++){
        if(column < 6){
          if(column === 0){
            cells.push(Number(splitRow[column]));
          }else{
            cells.push(String(splitRow[column]));
          }
        }else if(column === 17){
          const sankeySrc = String(splitRow[column]);
          if(sankeySrc.length > 1){
            cells.push(sankeySrc);
          }else{
            cells.push('');
          }
        }else{
          cells.push(Number(splitRow[column]));
        }
      }
      // console.log("CELLS", cells)
      cellRows.push(this._getResult(cells))
    }
    const results = cellRows.map(row => new QuarterlyResult(row));
    this._results = results;
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


  /** We don't need to see data all the way back from 2013 */
  private _trimData() {
    // const cutoffDate = dayjs('2019-01-01');
    // this._priceEntries = this._priceEntries.filter((item) => {
    //   return item.date.isAfter(cutoffDate);
    // });
  }

  /** The data comes in with date descending, needs to be reverse to ascending */
  private _sortData() {
    // this._priceEntries = this._priceEntries.sort((item1, item2) => {
    //   if (item1.date.isAfter(item2.date)) {
    //     return 1;
    //   } else if (item1.date.isBefore(item2.date)) {
    //     return -1;
    //   } else {
    //     return 0;
    //   }
    // });
  }

}
