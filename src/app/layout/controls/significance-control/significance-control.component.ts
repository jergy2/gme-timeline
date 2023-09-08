import { Component } from '@angular/core';
import { ControlsService } from '../../controls.service';
import { DataManagerService } from 'src/app/chart/data-manager-service';

@Component({
  selector: 'app-significance-control',
  templateUrl: './significance-control.component.html',
  styleUrls: ['./significance-control.component.scss']
})
export class SignificanceControlComponent {

  constructor(private _dataManagerService: DataManagerService){
    
    const initialValue = this._dataManagerService.significanceValue;
    this._controlButtons = [
      {value:0, isSelected: false},
      {value:1, isSelected: false},
      {value:2, isSelected: false},
      {value:3, isSelected: false},
      {value:4, isSelected: false},
      {value:5, isSelected: false},
    ];
    const foundItem = this._controlButtons.find(item => item.value === initialValue);
    if(foundItem){
      foundItem.isSelected = true;
    }
  }
  private _controlButtons: {value:number, isSelected: boolean}[] = [];
  public get controlButtons():  {value:number, isSelected: boolean}[] { return this._controlButtons; }

  public onClickButton(value: number){
    const foundItem = this._controlButtons.find(item => item.value === value);
    if(foundItem){
      this.controlButtons.forEach(item => item.isSelected = false);
      foundItem.isSelected = true;
      this._dataManagerService.updateSignificanceValue(value);
    }
  }

}
