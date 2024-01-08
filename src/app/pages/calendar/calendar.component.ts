import { Component, OnInit } from '@angular/core';
import { CalendarMonth } from './year-view-month/calendar.month.class';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit  {

  private _startDate = dayjs();
  private _endDate = dayjs(this._startDate).add(12, 'months');

  public get startDate(): dayjs.Dayjs { return this._startDate; }
  public get endDate(): dayjs.Dayjs { return this._endDate; }

  public get startDateYYYYMMDD(): string { return this.startDate.format('YYYY-MM-DD')}
  public get endDateYYYYMMDD(): string { return this.endDate.format('YYYY-MM-DD')}
  
  private _months: CalendarMonth[] = [];
  public get months(): CalendarMonth[] { return this._months; }


  ngOnInit(){
    this._buildMonths();
  }

  private _buildMonths(){
    let months: CalendarMonth[] = [];
    for(let month = 0; month < 12; month++){
      let monthStartDate = dayjs(this.startDate).set('month', month);
      const newMonth = new CalendarMonth(monthStartDate.format('YYYY-MM-DD'));
      months.push(newMonth);
    }
    this._months = months;
  }
}
