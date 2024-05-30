import { Injectable } from '@angular/core';
import { earningsDatesYYYYMMDD } from './year-view-month/earnings-dates';
import * as dayjs from 'dayjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { 
    this._nextEarningsDateYYYYMMDD = this._getNextEarningsDate();
    this._prevEarningsDateYYYYMMDD = this._getPrevEarningsDate();
  }

  private _getNextEarningsDate(): string{
    const earningsDates = earningsDatesYYYYMMDD;
    const today: dayjs.Dayjs = dayjs();
    const todayYYYYMMDD: string = today.format('YYYY-MM-DD');
    let findNextEarningsDateYYYYMMDD: string = '';
    for(let i=1; i<earningsDates.length;i++){
      if(earningsDates[i-1] < todayYYYYMMDD && earningsDates[i] >= todayYYYYMMDD){
        findNextEarningsDateYYYYMMDD = earningsDates[i];
      }
    }
    return findNextEarningsDateYYYYMMDD;
  }

  private _getPrevEarningsDate(): string{
    const earningsDates = earningsDatesYYYYMMDD;
    const today: dayjs.Dayjs = dayjs();
    const todayYYYYMMDD: string = today.format('YYYY-MM-DD');
    let findPrevEarningsDateYYYYMMDD: string = '';
    for(let i=earningsDates.length-1; i>=0;i--){
      if(earningsDates[i] < todayYYYYMMDD && earningsDates[i+1] >= todayYYYYMMDD){
        findPrevEarningsDateYYYYMMDD = earningsDates[i];
      }
    }
    return findPrevEarningsDateYYYYMMDD;
  }

  private _nextEarningsDateYYYYMMDD: string;
  private _prevEarningsDateYYYYMMDD: string;
  public get nextEarningsDateYYYYMMDD(): string { return this._nextEarningsDateYYYYMMDD; } 
  public get prevEarningsDateYYYYMMDD(): string { return this._prevEarningsDateYYYYMMDD; }
}
