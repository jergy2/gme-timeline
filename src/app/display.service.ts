import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() { }

  // private _display$: BehaviorSubject<'TIMELINE' | 'FINANCIALS'> = new BehaviorSubject<'TIMELINE' | 'FINANCIALS'>('TIMELINE');
  // public get display$(): Observable<'TIMELINE' | 'FINANCIALS'> { return this._display$.asObservable(); }
  // public get display(): 'TIMELINE' | 'FINANCIALS' { return this._display$.getValue(); }
  // public get displayIsTimeline(): boolean { return this.display === 'TIMELINE'; }
  // public get displayIsFinancials(): boolean { return this.display === 'FINANCIALS'; }

  // public setDisplay(display: 'TIMELINE' | 'FINANCIALS'){
  //   this._display$.next(display);
  // }
}
