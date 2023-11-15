import { Component, ViewChild, ElementRef } from '@angular/core';
import { faQuestion, faSliders, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, animate, transition, keyframes, } from '@angular/animations';
import { SidebarService } from 'src/app/layout/sidebar/sidebar.service';
import { ScreeSizeService } from 'src/app/scree-size.service';
import { SettingsService } from 'src/app/settings.service';
import { TimelineItemsService } from '../timeline-items/timeline-items.service';
import { EventSearchService } from './search/event-search.service';

@Component({
  selector: 'app-timeline-controls',
  templateUrl: './timeline-controls.component.html',
  styleUrls: ['./timeline-controls.component.scss'],
  animations: [
    trigger('appear', [
      state('appear', style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      // state('disappear', style({
      //   transform: 'translateX(-100%)',
      //   opacity: 0.3,
      // })),
      transition('void => *', [
        style({
          transform: 'translateY(1px)',
          opacity: 0.3,
        }),
        animate(120, style({
          opacity: 1,
          transform: 'translateY(0)',
        }))
      ]),
      transition('* => void', [
        style({
          transform: 'translateY(0)',
          opacity: 1,
        }),
        animate(120, style({
          opacity: 0.3,
          transform: 'translateY(1px)',
        }))
      ]),
    ]),
  ]
})
export class ControlsComponent {

  constructor(
    private _sidebarService: SidebarService,
    private _sizeService: ScreeSizeService,
    private _settingsService: SettingsService,
    private _timelineItemService: TimelineItemsService,
    private _searchService: EventSearchService) { }

  public get faSliders() { return faSliders; }
  public get faQuestion() { return faQuestion; }
  public get faMagnifyingGlass() { return faMagnifyingGlass; }

  public get isMinimized(): boolean { return this._sidebarService.controlsState === 'MINIMIZED'; }
  public get controlsExpanded(): boolean { return this._sidebarService.controlsState === 'EXPANDED'; }
  public get isPinned(): boolean { return this._sidebarService.controlsState === 'PINNED'; }

  public get isMobile(): boolean { return this._sizeService.isMobile; }
  public get showAsList(): boolean { return this._settingsService.chartListIsVertical; }

  private _isSearching: boolean = false;
  private _showSearchResults: boolean = false;
  private _settingsOpen: boolean = false;
  
  private _searchValue: string = '';
  private _searchInputValue: string = '';
  
  public get searchOpen(): boolean { return this._showSearchResults; }
  public get settingsOpen(): boolean { return this._settingsOpen; }
  public get showSearchResults(): boolean { return this._isSearching; }
  public get searchInputValue(): string { return this._searchInputValue; }
  public get searchValue(): string { return this._searchValue;}

  public onMouseEnterControls() {
    this._sidebarService.changeControlsState('EXPANDED');
    this._timelineItemService.unselectItem();
    this._settingsOpen = true;
    this._showSearchResults = false;
    this._isSearching = false;
    
    this.searchbox.nativeElement.blur();
  }
  public onMouseLeaveControls() {
    this._sidebarService.changeControlsState('MINIMIZED');
    this._settingsOpen = false;
    this._showSearchResults = false;
    this._isSearching = false;
    this._searchValue = this._searchInputValue;
  }

  public onClickSearchText() {
    this._sidebarService.changeControlsState('MINIMIZED');
    this._settingsOpen = false;
    this._showSearchResults = true;
    this._isSearching = true;
  }
  public onClickSearchButton(){
    this._sidebarService.changeControlsState('MINIMIZED');
    this._settingsOpen = false;
    this._showSearchResults = true;
    this._isSearching = true;
  }

  @ViewChild('searchbox') searchbox: ElementRef = new ElementRef('');

  public onKey(event: any) {
    this._isSearching = true;
    const inputValue: string = event.target.value;
    this._searchInputValue = inputValue;
    this._searchValue = inputValue;
  }

  public onSearchInputValueChanged(value: string){
    this._searchInputValue = value;
    if(value === ''){
      this._searchValue = '';
    }
  }
}
