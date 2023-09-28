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
  private _csvData: QuarterlyResultInterface[] = [];
  private _results: QuarterlyResult[] = [];
  public get quarterlyResults(): QuarterlyResult[] { return this._results; }

  public loadFinancialResults$(): Observable<boolean> {
    const subject$ = new Subject<boolean>();
    this._httpClient.get(this._fileName, { responseType: 'text' },).subscribe(
      (data) => {
        this._parseCSV(data);
        this._sortData();
        this._trimData();

        subject$.next(true);
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
    // console.log(data);
    const rows = data.split('\n');
    const headers = rows[0].split(',');
    const rowCount = rows.length - 1;
    const cellRows: QuarterlyResultInterface[] = [];
    for (let rowIndex = 1; rowIndex < rowCount; rowIndex++) {
      const splitRow: string[] = rows[rowIndex].split(',');
      const cells: string[] = [];
      splitRow.forEach(cell => {
        cell = cell.trim();
        let newCell: string = "";
        for (let charIndex = 0; charIndex < cell.length; charIndex++) {
          const charValue = cell[charIndex];
          if (charValue !== "\"") {
            newCell += charValue;
          }
        }
        cells.push(newCell);
      });
      cellRows.push(this._getResult(cells))
    }
    const results = cellRows.map(row => new QuarterlyResult(row));
    this._results = results;
  }

  private _getResult(cells: any[]): QuarterlyResultInterface {
    return {
      year: cells[0],
      quarter: cells[1],
      tenQKformLink: cells[2],
      newsReleaseLink: cells[3],
      filingDateYYYYMMDD: cells[4],
      reportDateYYYYMMDD: cells[5],
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
