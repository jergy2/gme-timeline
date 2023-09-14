import * as dayjs from 'dayjs';
export interface GmePriceEntry{
    date: dayjs.Dayjs,
    close: number,
    volume: number,
    open: string,
    high: string,
    low: string
}