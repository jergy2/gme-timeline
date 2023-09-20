import { Component } from '@angular/core';
import { IconDefinition, faList } from '@fortawesome/free-solid-svg-icons';
import { DisplayService } from '../../display.service';

@Component({
  selector: 'app-view-control',
  templateUrl: './view-control.component.html',
  styleUrls: ['./view-control.component.scss']
})
export class ViewControlComponent {
  public get faList(): IconDefinition { return faList; }
  constructor(private _displayService: DisplayService){}
  public onClickToggle(){
    this._displayService.toggleDisplay();
  }
}
