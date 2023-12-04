import { Component, OnInit } from '@angular/core';
import { IconDefinition, faList } from '@fortawesome/free-solid-svg-icons';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-view-control',
  templateUrl: './view-control.component.html',
  styleUrls: ['./view-control.component.scss']
})
export class ViewControlComponent implements OnInit{
  public get faList(): IconDefinition { return faList; }
  constructor(private _settingsService: SettingsService){}
  public get showAsList(): boolean { return this._settingsService.chartListIsVertical; }
  ngOnInit(){
  }
  public onClickHorizontal(){
    this._settingsService.updateListDirection('HORIZONTAL');
  }
  public onClickVertical(){
    this._settingsService.updateListDirection('VERTICAL');
  }
}
