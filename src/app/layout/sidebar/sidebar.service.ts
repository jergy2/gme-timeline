import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }


  private _controlsState$: BehaviorSubject<'MINIMIZED' | 'EXPANDED' | 'PINNED'> = new BehaviorSubject<'MINIMIZED' | 'EXPANDED' | 'PINNED'>('MINIMIZED');
  public get controlsState$(): Observable<'MINIMIZED' | 'EXPANDED' | 'PINNED'> { return this._controlsState$.asObservable(); }
  public get controlsState(): 'MINIMIZED' | 'EXPANDED' | 'PINNED' { return this._controlsState$.getValue(); }

  public changeControlsState(newState: 'MINIMIZED' | 'EXPANDED' | 'PINNED') {
    this._controlsState$.next(newState);
  }

}
