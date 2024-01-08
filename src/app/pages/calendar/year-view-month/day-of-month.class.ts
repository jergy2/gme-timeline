import * as dayjs from "dayjs";

export class DayOfMonth{
    
    private _dateYYYYMMDD: string;
    public get dateYYYYMMDD(): string { return this._dateYYYYMMDD; }
    public get date(): dayjs.Dayjs { return dayjs(this.dateYYYYMMDD)}

    private _isDayOfThisMonth: boolean = false;
    public get isDayOfThisMonth(): boolean { return this._isDayOfThisMonth; }

    private _label: string = '';
    public get label(): string { return this._label; }


    constructor(dateYYYYMMDD: string, month: number){
        this._dateYYYYMMDD = dateYYYYMMDD;
        if(dayjs(dateYYYYMMDD).month() === month){
            this._isDayOfThisMonth = true;
            this._ngClass.push('day-is-this-month');
        }else{
            this._ngClass.push('day-is-not-this-month')
        }
        this._ngClass.push('no-event');
    }

    public setLabel(label: string){
        this._label = label;
        const foundNoEventIndex = this._ngClass.findIndex(cssClass => cssClass === 'no-event');
        if(this.isDayOfThisMonth){
            if(foundNoEventIndex > -1){
                this._ngClass[foundNoEventIndex] = 'has-event';
            }else{
                this._ngClass.push('has-event');
            }
        }
    }

    private _mouseIsOver: boolean = false;
    public get mouseIsOver(): boolean { return this._mouseIsOver;}
    public onMouseOver(){
        if(this.isDayOfThisMonth){
            this._mouseIsOver = true;
        }
    }

    public onMouseLeave(){
        this._mouseIsOver = false;
    }

    private _ngClass: string[] = [];
    public get ngClass(): string[]  { return this._ngClass; }
}