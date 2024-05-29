import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { 
    this._nextEarningsDateYYYYMMDD = this._getNextEarningsDate();
  }

  private _getNextEarningsDate(): string{
    return '';
  }

  private _nextEarningsDateYYYYMMDD: string;
  public get nextEarningsDateYYYYMMDD(): string { return this._nextEarningsDateYYYYMMDD; } 
}
