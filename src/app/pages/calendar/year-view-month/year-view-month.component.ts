import { Component, Input, OnInit } from '@angular/core';
import { CalendarMonth } from './calendar.month.class';
import { ScreeSizeService } from 'src/app/services/scree-size.service';
import { csBuyDatesYYYYMMDD } from './computershare-buy-dates';
import * as dayjs from 'dayjs';
import { DayOfMonth } from './day-of-month.class';

@Component({
  selector: 'app-year-view-month',
  templateUrl: './year-view-month.component.html',
  styleUrls: ['./year-view-month.component.scss']
})
export class YearViewMonthComponent implements OnInit {

  @Input('month') public month: CalendarMonth = new CalendarMonth('2020-01-01');

  private _daysOfMonth: string[] = [];

  constructor(private _screenService: ScreeSizeService){}

  ngOnInit(){
    this._screenService.screenDimensions$.subscribe(()=>{
      this._update();
    })
    const monthStartDate = dayjs(this.month.startDateYYYYMMDD).format('YYYY-MM-DD');
    const monthEndDate = dayjs(this.month.startDateYYYYMMDD).endOf('month').format('YYYY-MM-DD');
    csBuyDatesYYYYMMDD.forEach(date => {
      const foundDayOfMonth = this.month.daysOfMonth.find(day => day.dateYYYYMMDD === date);
      if(foundDayOfMonth){
        foundDayOfMonth.setLabel("Computershare recurring buy")
      }
    });
  }

  private _update(){
    
  }

}
