import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { IconDefinition, faSliders, faQuestion, faCoins, faChartLine, faChartPie, faInfo } from '@fortawesome/free-solid-svg-icons';
import { MobileMenuItem } from './mobile-menu-item.class';
import { mobileMenuItems } from './mobile-menu-items';

@Component({
  selector: 'app-mobile-top-bar',
  templateUrl: './mobile-top-bar.component.html',
  styleUrls: ['./mobile-top-bar.component.scss']
})
export class MobileTopBarComponent {

  constructor(private router: Router){}

  public get faInfo(): IconDefinition { return faInfo; }
  public get faSliders(): IconDefinition { return faSliders; }
  public get faQuestion(): IconDefinition { return faQuestion; }
  public get mobileMenuItems(): MobileMenuItem[] { return mobileMenuItems; }

  private _menuIsExpanded: boolean = false;
  public get menuIsExpanded(): boolean { return this._menuIsExpanded;}
  public get selectedMenuItem(): MobileMenuItem { 
    let selectedItem: MobileMenuItem = this.mobileMenuItems[0];
    this.mobileMenuItems.forEach(item => {
      if(item.isSelected){
        selectedItem = item;
      }
    });
    return selectedItem;
  }

  ngOnInit(){
    this.mobileMenuItems.forEach(item => item.unselect());
    this.mobileMenuItems.forEach(item => {
      if(item.routerLink === this.router.url){
        item.select();
      }
    });
  }


  public onClickMenuItem(item: MobileMenuItem){
    this.mobileMenuItems.forEach(item => item.unselect());
    item.onClick(this.router);
    this._menuIsExpanded = false;
  }
  public onClickImage(){
    if(this.selectedMenuItem.routerLink === '/timeline'){
      this._menuIsExpanded = !this._menuIsExpanded;
    }
  }
  
  public onClickTopBar(){
    if(this.selectedMenuItem.routerLink !== '/timeline'){
      this._menuIsExpanded = !this._menuIsExpanded;
    }
  }


}
