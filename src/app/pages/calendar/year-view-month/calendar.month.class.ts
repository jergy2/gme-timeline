import * as dayjs from "dayjs";
import { DayOfMonth } from "./day-of-month.class";


export class CalendarMonth{

    private _startDate: dayjs.Dayjs;
    private _daysOfMonth: DayOfMonth[] = [];
    public get startDateYYYYMMDD(): string { return this._startDate.format('YYYY-MM-DD'); }
    public get monthName(): string { return this._startDate.format('MMMM')}

    public get startDate(): dayjs.Dayjs { return dayjs(this._startDate); }

    public get daysOfMonth(): DayOfMonth[] { return this._daysOfMonth; }

    constructor(dateYYYYMMDD: string){
        this._startDate = dayjs(dateYYYYMMDD).startOf('month');
        let dayCount: number = 0;
        const dayOfWeek = this._startDate.day();
        let currentDate = dayjs(this._startDate).subtract(dayOfWeek, 'days');
        let daysOfMonth: DayOfMonth[] = [];
        while(dayCount < 42){
            let dayOfMonth: DayOfMonth = new DayOfMonth(currentDate.format('YYYY-MM-DD'), dayjs(dateYYYYMMDD).month());
            daysOfMonth.push(dayOfMonth);
            currentDate = dayjs(currentDate).add(1, 'days');
            dayCount++;
        }
        this._daysOfMonth = daysOfMonth;
    }
}