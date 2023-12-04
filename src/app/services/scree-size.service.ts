import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreeSizeService {

  constructor() { this._screenDimensions$ = new BehaviorSubject({width: window.innerWidth, height: window.innerHeight})}

  private _screenDimensions$: BehaviorSubject<{width: number, height: number}>; 
  public get screenDimensions$(): Observable<{width: number, height: number}> { return this._screenDimensions$.asObservable(); } 
  public get screenDimensions(): {width: number, height: number} { return this._screenDimensions$.getValue(); }
  public get isMobile(): boolean { return this.screenDimensions.width < 480; }

  public updateScreenSize(width: number, height: number){
    this._screenDimensions$.next({width: width, height: height});
  }
}
