import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() { }

  private _showAsList: boolean = false;
  // public get showAsList(): boolean { return this._showAsList; }
  public toggleDisplay(){ this._showAsList = !this._showAsList; }
}
