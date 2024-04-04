import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import * as dayjs from 'dayjs';
import { GmePriceEntry } from './gme-price-entry.interface';

@Injectable({
  providedIn: 'root'
})
export class HistoricGMEDataService {

  constructor(private _httpClient: HttpClient) { }
  private _priceEntries: GmePriceEntry[] = [];
  public get allPriceEntries(): GmePriceEntry[] { return this._priceEntries; }

  public loadGmeData$(): Observable<GmePriceEntry[]>{
    const gmeSubject$ = new Subject<GmePriceEntry[]>();
    /**
     *  Google Sheet needs to be publish as tsv (tab-separated values) and not csv.
     *  TSV output is far more simple to parse. 
     */
    /**
     * Data source:  https://www.nasdaq.com/market-activity/stocks/gme/historical
     */
    const eventsGoogleSheetTsvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQixUOsD8VuEXI06nXbOqMGsDbQiofVAYlbL9_-fh6xo21SSt84x2e0iqDBqWmj_e--CXKpKtiPbjOq/pub?gid=1551713069&single=true&output=tsv';
    const priceEntries: GmePriceEntry[] = [];
    this._httpClient.get(eventsGoogleSheetTsvUrl, { responseType: 'text' }).subscribe({
      next: (response) => {
        let lines = response.split('\n');
        lines = lines.slice(1);
        lines.forEach(line => {
          let tabSplitLine = line.split('\t');
          const priceEntry: GmePriceEntry = {
            dateYYYYMMDD: this._convertToDate(tabSplitLine[0]),
            close: this._convertToNumber(tabSplitLine[1]),
            volume: this._convertToNumber(tabSplitLine[2]),
            open: this._convertToNumber(tabSplitLine[3]),
            high: this._convertToNumber(tabSplitLine[4]),
            low: this._convertToNumber(tabSplitLine[5]),
          }
          priceEntries.push(priceEntry);
        });
        this._priceEntries = priceEntries;
        this._sortData();
        this._fillGaps();
        gmeSubject$.next(this._priceEntries);
        gmeSubject$.complete();
      },
    })
    return gmeSubject$.asObservable();
  }

  /** The data comes in with date descending, needs to be reverse to ascending */
  private _sortData() {
    this._priceEntries = this._priceEntries.sort((item1, item2) => {
      if (item1.dateYYYYMMDD > item2.dateYYYYMMDD) {
        return 1;
      } else if (item1.dateYYYYMMDD < item2.dateYYYYMMDD) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  /** Not every day has a trading price (e.g. Saturdays, Sundays, holidays) 
   *  so an entry needs to be created for those dates in order to maintain 1 entry per date */
  private _fillGaps() {
    const startDate: dayjs.Dayjs = dayjs(this._priceEntries[0].dateYYYYMMDD);
    const endDate: dayjs.Dayjs = dayjs(this._priceEntries[this._priceEntries.length - 1].dateYYYYMMDD);
    const newEntries: GmePriceEntry[] = [];
    let currentDateYYYYMMDD: string = dayjs(startDate).format('YYYY-MM-DD');
    let currentIndex: number = 0;
    while (currentDateYYYYMMDD < endDate.format('YYYY-MM-DD')) {
      const hasEntry = this._priceEntries[currentIndex].dateYYYYMMDD === currentDateYYYYMMDD;
      if (hasEntry) {
        newEntries.push(this._priceEntries[currentIndex]);
        currentIndex++;
      } else {
        const prevEntry = this._priceEntries[currentIndex-1]
        newEntries.push({
          dateYYYYMMDD: currentDateYYYYMMDD,
          close: prevEntry.close,
          volume: prevEntry.volume,
          open: prevEntry.open,
          high: prevEntry.high,
          low: prevEntry.low,
        });
      }
      currentDateYYYYMMDD = dayjs(currentDateYYYYMMDD).add(1, 'days').format('YYYY-MM-DD');
    }
    newEntries.push(this._priceEntries[this._priceEntries.length - 1]);
    this._priceEntries = newEntries;
  }

  private _convertToNumber(value: string): number {
    const num = Number(value.substring(1));
    return num;
  }

  /** date comes in formatted as as MM/DD/YYYY */
  private _convertToDate(value: string): string {
    const month = value.substring(0, 2);
    const day = value.substring(3, 5);
    const year = value.substring(6, 10);
    const dateYYYYMMDD: string = String(year) + '-' + String(month) + '-' + String(day);
    const date: dayjs.Dayjs = dayjs(dateYYYYMMDD);
    return dateYYYYMMDD;
  }

}
