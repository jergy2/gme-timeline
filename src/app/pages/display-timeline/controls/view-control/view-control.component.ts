import { Component, OnInit } from '@angular/core';
import { IconDefinition, faList } from '@fortawesome/free-solid-svg-icons';
import { DisplayService } from '../../display.service';
import { SettingsService } from 'src/app/settings.service';
import { SidebarService } from 'src/app/layout/sidebar/sidebar.service';

@Component({
  selector: 'app-view-control',
  templateUrl: './view-control.component.html',
  styleUrls: ['./view-control.component.scss']
})
export class ViewControlComponent implements OnInit{
  public get faList(): IconDefinition { return faList; }
  constructor(private _settingsService: SettingsService, private _sidebarService: SidebarService){}
  public get showAsList(): boolean { return this._settingsService.showAsList; }
  ngOnInit(){
  }
  public onClickHorizontal(){
    this._settingsService.updateDisplayMode('CHART');
    this._sidebarService.changeControlsState('MINIMIZED');
  }
  public onClickVertical(){
    this._settingsService.updateDisplayMode('LIST');
    this._sidebarService.changeControlsState('MINIMIZED');
  }
}
