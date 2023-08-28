import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreeSizeService {

  constructor() { }

  private _screenDimensions$: Subject<{width: number, height: number}> = new Subject(); 
  public get screenDimensions$(): Observable<{width: number, height: number}> { return this._screenDimensions$.asObservable(); } 

  public updateScreenSize(width: number, height: number){
    
    this._screenDimensions$.next({width: width, height: height});
    console.log({width: width, height: height})
  }
}
