import { TimelineItemType } from "src/app/timeline-items/timeline-item/timeline-item-type.enum";
import { CategoryButton } from "./category-button.interface";
import { BehaviorSubject, Observable } from 'rxjs';

export class CategoryButtons {
  constructor() {
    this._buildCategoryButtons([
      TimelineItemType.CORP, TimelineItemType.DFV, TimelineItemType.DRS, TimelineItemType.MEDIA, TimelineItemType.OTHER, TimelineItemType.RC
    ]);
    const selectedCategories: TimelineItemType[] = [];
    this._categoryButtons.forEach(item => {
      if (item.category !== 'ALL') {
        selectedCategories.push(item.category)
      }
    });
    this._selectedCategories$ = new BehaviorSubject<TimelineItemType[]>(selectedCategories);
  }

  private _categoryButtons: CategoryButton[] = [];
  private _selectedCategories$: BehaviorSubject<TimelineItemType[]>;
  public get categoryButtons(): CategoryButton[] { return this._categoryButtons; }
  public get selectedCategories$(): Observable<TimelineItemType[]> { return this._selectedCategories$.asObservable(); }
  public get selectedCategories(): TimelineItemType[] { return this._selectedCategories$.getValue(); }

  public setCategories(categories: TimelineItemType[] ){ 
    this._buildCategoryButtons(categories);
  }

  public onClickButtonCategory(button: CategoryButton) {
    if (button.category === 'ALL') {
      this._categoryButtons.forEach(categoryButton => {
        categoryButton.hideActivated = false;
        categoryButton.showActivated = true;
      });
    } else {
      this._categoryButtons.forEach(categoryButton => {
        categoryButton.hideActivated = true;
        categoryButton.showActivated = false;
      });
      button.showActivated = true;
      button.hideActivated = false;
      this._allButton.showActivated = false;
      this._allButton.hideActivated = false;
    }
    this._updateSelectedCategories();
  }
  public onClickShow(button: CategoryButton) {
    if (button.category === 'ALL') {
      this._categoryButtons.forEach(categoryButton => {
        categoryButton.hideActivated = false;
        categoryButton.showActivated = true;
      });
    } else {
      button.showActivated = true;
      button.hideActivated = false;
      if(this._allButton.hideActivated === true){
        this._allButton.hideActivated = false;
        this._allButton.showActivated = false;
      }
      let allShown: boolean = true;
      this._categoryButtons.forEach(item => {
        if(item.category !== 'ALL'){
          if(item.hideActivated === true){
            allShown = false;
          }
        }
      });
      if(allShown){
        this._allButton.showActivated = true;
      }
    }
    this._updateSelectedCategories();
  }
  public onClickHide(button: CategoryButton) {
    if (button.category === 'ALL') {
      this._categoryButtons.forEach(categoryButton => {
        categoryButton.hideActivated = true;
        categoryButton.showActivated = false;
      });
    } else {
      button.showActivated = false;
      button.hideActivated = true;
      if(this._allButton.showActivated === true){
        this._allButton.hideActivated = false;
        this._allButton.showActivated = false;
      }
      let allHidden: boolean = true;
      this._categoryButtons.forEach(item => {
        if(item.category !== 'ALL'){
          if(item.showActivated === true){
            allHidden = false;
          }
        }
      });
      if(allHidden){
        this._allButton.hideActivated = true;
      }
    }
    this._updateSelectedCategories();
  }

  private _updateSelectedCategories() {
    const selectedCategories: TimelineItemType[] = [];
    this._categoryButtons.forEach(item => {
      if (item.category !== 'ALL') {
        if(item.showActivated === true){
          selectedCategories.push(item.category)
        }
      }
    });
    this._selectedCategories$.next(selectedCategories);
  }


  private _allButton: CategoryButton = {
    category: 'ALL',
    showActivated: true,
    hideActivated: false,
  }

  
  private _buildCategoryButtons(categories: TimelineItemType[]) {
    const allCategories: TimelineItemType[] = [
      TimelineItemType.CORP, TimelineItemType.DFV, TimelineItemType.DRS, TimelineItemType.MEDIA, TimelineItemType.OTHER, TimelineItemType.RC
    ];
    if(categories.length === allCategories.length){
      this._allButton.showActivated = true;
      this._allButton.hideActivated = false;
    }else{
      this._allButton.showActivated = false;
      this._allButton.hideActivated = false;
    }
    if(categories.length === 0){
      this._allButton.hideActivated = true;
    }


    this._categoryButtons = [
      this._allButton,
      {
        category: TimelineItemType.DRS,
        showActivated: categories.indexOf(TimelineItemType.DRS) > -1,
        hideActivated: !(categories.indexOf(TimelineItemType.DRS) > -1),
      },
      {
        category: TimelineItemType.CORP,
        showActivated: categories.indexOf(TimelineItemType.CORP) > -1,
        hideActivated: !(categories.indexOf(TimelineItemType.CORP) > -1),
      },
      {
        category: TimelineItemType.RC,
        showActivated: categories.indexOf(TimelineItemType.RC) > -1,
        hideActivated: !(categories.indexOf(TimelineItemType.RC) > -1),
      },
      {
        category: TimelineItemType.DFV,
        showActivated: categories.indexOf(TimelineItemType.DFV) > -1,
        hideActivated: !(categories.indexOf(TimelineItemType.DFV) > -1),
      },
      {
        category: TimelineItemType.MEDIA,
        showActivated: categories.indexOf(TimelineItemType.MEDIA) > -1,
        hideActivated: !(categories.indexOf(TimelineItemType.MEDIA) > -1),
      },
      {
        category: TimelineItemType.OTHER,
        showActivated: categories.indexOf(TimelineItemType.OTHER) > -1,
        hideActivated: !(categories.indexOf(TimelineItemType.OTHER) > -1),
      },
    ];
  }
}