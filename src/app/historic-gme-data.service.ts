import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import * as dayjs from 'dayjs';
import { GmePriceEntry } from './pages/display-timeline/timeline-items/timeline-item/gme-price-entry.interface';

@Injectable({
  providedIn: 'root'
})
export class HistoricGMEDataService {

  constructor(private _httpClient: HttpClient) { }


  /**
   * Data source:
   * 
   * https://www.nasdaq.com/market-activity/stocks/gme/historical
   * 
   */

  private _fileName = 'assets/data/gme-data.csv';
  private _priceEntries: GmePriceEntry[] = [];
  public get allPriceEntries(): GmePriceEntry[] { return this._priceEntries; }
  public get priceEntriesAfterCutoff(): GmePriceEntry[] { return this._priceEntries.filter(item => item.date.format('YYYY-MM-DD') > '2020-07-01'); }

  public loadHistoricData$(): Observable<boolean> {
    const subject$ = new Subject<boolean>();
    this._httpClient.get(this._fileName, { responseType: 'text' },).subscribe(
      (data) => {
        this._parseCSV(data);
        this._sortData();
        this._fillGaps();
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
    const entries = [];
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
      const priceEntry: GmePriceEntry = {
        date: this._convertToDate(cells[0]),
        close: this._convertToNumber(cells[1]),
        volume: Number(cells[2]),
        open: cells[3],
        high: cells[4],
        low: cells[5],
      }
      entries.push(priceEntry);

    }
    this._priceEntries = entries;
  }


  /** We don't need to see data all the way back from 2013 */
  private _trimData() {
    const cutoffDate = dayjs('2019-01-01');
    this._priceEntries = this._priceEntries.filter((item) => {
      return item.date.isAfter(cutoffDate);
    });
  }

  /** The data comes in with date descending, needs to be reverse to ascending */
  private _sortData() {
    this._priceEntries = this._priceEntries.sort((item1, item2) => {
      if (item1.date.isAfter(item2.date)) {
        return 1;
      } else if (item1.date.isBefore(item2.date)) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  /** Not every day has a trading price (e.g. Saturdays, Sundays, holidays) 
   *  so an entry needs to be created for those dates in order to maintain 1 entry per date */
  private _fillGaps() {
    const startDate: dayjs.Dayjs = dayjs(this._priceEntries[0].date);
    const endDate: dayjs.Dayjs = dayjs(this._priceEntries[this._priceEntries.length - 1].date);
    const newEntries: GmePriceEntry[] = [];
    let currentDate: dayjs.Dayjs = dayjs(startDate);
    let currentIndex: number = 0;
    while (currentDate.isBefore(endDate)) {
      const hasEntry = this._priceEntries[currentIndex].date.isSame(currentDate);
      if (hasEntry) {
        newEntries.push(this._priceEntries[currentIndex]);
        currentIndex++;
      } else {
        const prevEntry = this._priceEntries[currentIndex-1]
        newEntries.push({
          date: currentDate,
          close: prevEntry.close,
          volume: prevEntry.volume,
          open: prevEntry.open,
          high: prevEntry.high,
          low: prevEntry.low,
        });
      }
      currentDate = currentDate.add(1, 'days');
    }
    newEntries.push(this._priceEntries[this._priceEntries.length - 1]);
    this._priceEntries = newEntries;
  }

  private _convertToNumber(value: string): number {
    const num = Number(value.substring(1));
    // console.log(num);
    return num;
  }

  private _convertToDate(value: string): dayjs.Dayjs {
    const month = value.substring(0, 2);
    const day = value.substring(3, 5);
    const year = value.substring(6, 10);
    const dateYYYYMMDD: string = String(year) + '-' + String(month) + '-' + String(day);
    const date: dayjs.Dayjs = dayjs(dateYYYYMMDD);
    return date;
  }

}
