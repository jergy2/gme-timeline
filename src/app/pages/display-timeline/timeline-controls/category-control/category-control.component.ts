import { Component, OnInit } from '@angular/core';
import { CategoryButtons as CategoryButtonManager } from './category-button-manager.class';
import { CategoryButton } from './category-button.interface';
import { ChartDataManagerService } from '../../chart/chart-data-manager-service';
import { TimelineItemsService } from '../../timeline-items/timeline-items.service';
import { TimelineEventType } from '../../timeline-items/timeline-item/timeline-event-type.enum';
import { SettingsService } from 'src/app/services/settings.service';
@Component({
  selector: 'app-category-control',
  templateUrl: './category-control.component.html',
  styleUrls: ['./category-control.component.scss']
})
export class CategoryControlComponent implements OnInit {

  constructor(
    private _dataManagerService: ChartDataManagerService, 
    private _itemService: TimelineItemsService, 
    private _settingsService: SettingsService) { }

  private _buttonManager: CategoryButtonManager = new CategoryButtonManager();
  public get buttonManager(): CategoryButtonManager { return this._buttonManager; }
  public get categoryButtons(): CategoryButton[] { return this.buttonManager.categoryButtons; }

  ngOnInit() {
    // const existingCategoriesFilter: TimelineItemType[] = this._dataManagerService.categories;
    const existingCategoriesFilter = this._settingsService.categories;
    this._buttonManager.setCategories(existingCategoriesFilter);
  }

  public onClickButtonCategory(button: CategoryButton) {
    this.buttonManager.onClickButtonCategory(button);
    this._makeUpdates();
  }
  public onClickShow(button: CategoryButton) {
    this.buttonManager.onClickShow(button);
    this._makeUpdates();
  }
  public onClickHide(button: CategoryButton) {
    this.buttonManager.onClickHide(button);
    this._makeUpdates();
  }

  private _makeUpdates(){
    
    const selectedCategories = this.buttonManager.selectedCategories;
    this._settingsService.updateCategories(selectedCategories);
    this._dataManagerService.updateCategories(selectedCategories);
    this._itemService.updateCategories(selectedCategories);
  }

}
