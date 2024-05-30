import { Component, Input, OnInit } from '@angular/core';
import { CalendarMonth } from './calendar.month.class';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { csBuyDatesYYYYMMDD } from './computershare-buy-dates';
import * as dayjs from 'dayjs';
import { DayOfMonth } from './day-of-month.class';
import { CalendarEventType } from './calendar-event-type.enum';
import { earningsDatesYYYYMMDD } from './earnings-dates';

@Component({
  selector: 'app-year-view-month',
  templateUrl: './year-view-month.component.html',
  styleUrls: ['./year-view-month.component.scss']
})
export class YearViewMonthComponent implements OnInit {

  @Input('month') public month: CalendarMonth = new CalendarMonth('2020-01-01');

  constructor(){}

  ngOnInit(){
    csBuyDatesYYYYMMDD.forEach(date => {
      const foundDayOfMonth = this.month.daysOfMonth.find(day => day.dateYYYYMMDD === date);
      if(foundDayOfMonth){
        foundDayOfMonth.setCalendarEvent(CalendarEventType.CS_BUY_DATE);
      }
    });
    earningsDatesYYYYMMDD.forEach(date => {
      const foundDayOfMonth = this.month.daysOfMonth.find(day => day.dateYYYYMMDD === date);
      if(foundDayOfMonth){
        foundDayOfMonth.setCalendarEvent(CalendarEventType.EARNINGS_DATE);
      }
    })
  }

}
