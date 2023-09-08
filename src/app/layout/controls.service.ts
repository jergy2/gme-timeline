import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlsService {

  constructor() { }


  private _controlsState$: BehaviorSubject<'MINIMIZED' | 'EXPANDED' | 'PINNED'> = new BehaviorSubject<'MINIMIZED' | 'EXPANDED' | 'PINNED'>('MINIMIZED');
  // private _significanceValue$: BehaviorSubject<number> = new BehaviorSubject(1);
  
  public get controlsState$(): Observable<'MINIMIZED' | 'EXPANDED' | 'PINNED'> { return this._controlsState$.asObservable(); }
  public get controlsState(): 'MINIMIZED' | 'EXPANDED' | 'PINNED' { return this._controlsState$.getValue(); }
  // public get significanceValue(): number { return this._significanceValue$.getValue(); }
  // public get significanceValue$(): Observable<number> { return this._significanceValue$.asObservable(); }
  
  
  public changeControlsState(newState: 'MINIMIZED' | 'EXPANDED' | 'PINNED'){
    this._controlsState$.next(newState);
  }

  // public updateSignificanceValue(value: number){
  //   this._significanceValue$.next(value);
  // }
  
}
