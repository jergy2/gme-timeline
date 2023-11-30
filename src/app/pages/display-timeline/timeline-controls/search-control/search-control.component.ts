import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimelineItemsService } from '../../timeline-items/timeline-items.service';
import { EventSearchService } from '../search/event-search.service';
import { TimelineEvent } from '../../timeline-items/timeline-item/timeline-event';
import { ChartDataManagerService } from '../../chart/chart-data-manager-service';
import { TimelineEventType } from '../../timeline-items/timeline-item/timeline-event-type.enum';
import { SettingsService } from 'src/app/settings.service';
import { TagAssociation } from '../search/tag-association.interface';
import { TagSearchable } from '../search/tag-searchable.class';
import { ScreeSizeService } from 'src/app/scree-size.service';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.scss']
})
export class SearchControlComponent {


  private _searchValue: string = '';
  @Input('searchValue') public set searchValue(value: string){
    this._searchValue = value;
    this._searchService.search(value);
  }
  public get searchValue(){ return this._searchValue; }

  @Output() searchValueChanged: EventEmitter<string> = new EventEmitter(); 
  @Output() searchResultsApplied: EventEmitter<boolean> = new EventEmitter(); 

  public get tagResults(): TagSearchable[] { return this._searchService.tagResults; }
  public get eventResults(): TimelineEvent[] { return this._searchService.eventResults;}

  constructor(
    private _eventService: TimelineItemsService,
    private _searchService: EventSearchService,
    private _chartService: ChartDataManagerService,
    private _settingsService: SettingsService,
    private _sizeService: ScreeSizeService
  ){
  }

  public get isMobile(): boolean { return this._sizeService.isMobile; }

  public onClickTagResult(tag: TagSearchable){
    this.searchValueChanged.emit(tag.displayName);
    this._searchService.onClickTagSearchable(tag);
    this._searchValue = tag.displayName;
  }

  public onClickApplyResultsToChart(){
    this._eventService.setDisplayedTimelineEvents(this.eventResults);
    this._chartService.updateDisplayedEvents(this.eventResults);
    this.searchResultsApplied.emit(true);
  }
  public onClickClearResultsFromChart(){
    this._searchValue = '';
    this.searchValueChanged.emit(this._searchValue);
    this._searchService.clearSearch();
    this._eventService.setDisplayedTimelineEvents(this._searchService.allTimelineEvents);
    this._chartService.clearSearchResults(this._settingsService.significanceValue, this._settingsService.categories, this._eventService.allTimelineItems);
  }

}
