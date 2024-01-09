import { Component, OnInit } from '@angular/core';
import { CalendarMonth } from './year-view-month/calendar.month.class';
import * as dayjs from 'dayjs';
import { ScreeSizeService } from 'src/app/services/scree-size.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  private _startDate = dayjs();
  private _endDate = dayjs(this._startDate).add(12, 'months');

  public get startDate(): dayjs.Dayjs { return this._startDate; }
  public get endDate(): dayjs.Dayjs { return this._endDate; }

  public get startDateYYYYMMDD(): string { return this.startDate.format('YYYY-MM-DD') }
  public get endDateYYYYMMDD(): string { return this.endDate.format('YYYY-MM-DD') }

  private _months: CalendarMonth[] = [];
  public get months(): CalendarMonth[] { return this._months; }

  constructor(private _screenService: ScreeSizeService) { }

  ngOnInit() {
    this._buildMonths();
    this._screenService.screenDimensions$.subscribe(() => {
      this._updateGrid();
    });
  }

  private _buildMonths() {
    let months: CalendarMonth[] = [];
    for (let month = 0; month < 12; month++) {
      let monthStartDate = dayjs(this.startDate).set('month', month);
      const newMonth = new CalendarMonth(monthStartDate.format('YYYY-MM-DD'));
      months.push(newMonth);
    }
    this._months = months;
  }

  private _updateGrid() {
    const width = this._screenService.screenDimensions.width;
    if (width > 1220) {
      this._monthGridStyle = {
        "grid-template-columns": "repeat(4, 1fr)",
        "grid-template-rows": "repeat(3, 1fr)",
      }
    } else if (width <= 1220 && width > 935) {
      this._monthGridStyle = {
        "grid-template-columns": "repeat(3, 1fr)",
        "grid-template-rows": "repeat(4, 1fr)",
      }
    } else if (width <= 935 && width > 650) {
      this._monthGridStyle = {
        "grid-template-columns": "repeat(2, 1fr)",
        "grid-template-rows": "repeat(6, 1fr)",
      }
    } else if (width <= 650) {
      this._monthGridStyle = {
        "grid-template-columns": "repeat(1, 1fr)",
        "grid-template-rows": "repeat(12, 1fr)",
      }
    }
  }

  private _monthGridStyle: any = {
    "grid-template-columns": "repeat(4, 1fr)",
    "grid-template-rows": "repeat(3, 1fr)",
  };
  public get monthGridStyle(): any {
    return this._monthGridStyle;
  }
}
