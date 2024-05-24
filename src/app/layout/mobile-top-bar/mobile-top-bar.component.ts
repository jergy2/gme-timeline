import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IconDefinition, faSliders, faQuestion, faCoins, faChartLine, faChartPie, faInfo, faBars } from '@fortawesome/free-solid-svg-icons';
import { MobileMenuItem } from './mobile-menu-item.class';
import { mobileMenuItems } from './mobile-menu-items';

@Component({
  selector: 'app-mobile-top-bar',
  templateUrl: './mobile-top-bar.component.html',
  styleUrls: ['./mobile-top-bar.component.scss']
})
export class MobileTopBarComponent implements OnInit{

  constructor(private router: Router){}

  public get faInfo(): IconDefinition { return faInfo; }
  public get faSliders(): IconDefinition { return faSliders; }
  public get faQuestion(): IconDefinition { return faQuestion; }
  public get faBars(): IconDefinition { return faBars; }
  public get mobileMenuItems(): MobileMenuItem[] { return mobileMenuItems; }

  private _isTimeline: boolean = false;

  public get isTimeline(): boolean { return this._isTimeline; }

  private _menuIsExpanded: boolean = false;
  private _selectedMenuItem: MobileMenuItem | null= null;
  public get menuIsExpanded(): boolean { return this._menuIsExpanded;}
  public get selectedMenuItem(): MobileMenuItem | null { return this._selectedMenuItem; } 
  // public get selectedMenuItem(): MobileMenuItem { 
  //   let selectedItem: MobileMenuItem = this.mobileMenuItems[0];
  //   this.mobileMenuItems.forEach(item => {
  //     if(item.isSelected){
  //       selectedItem = item;
  //     }
  //   });
  //   return selectedItem;
  // }

  ngOnInit(){

    console.log(this.router.url)
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this._setItem(event.url);
        
    }});
  }


  private _setItem(url :string){
    let itemFound: boolean = false;
    console.log("URLski:", url, url === '/')
    this._isTimeline = false;
    this.mobileMenuItems.forEach(item => item.unselect());
    this.mobileMenuItems.forEach(item => {
      if(item.routerLink === url){
        console.log("URL", url)
        item.select();
        this._selectedMenuItem = item;
        itemFound = true;

      }
      
    });
    if(url === '/' || url === '/timeline'){
      console.log("It's true")
      this._isTimeline = true;
      const timelineItem = this.mobileMenuItems.find(item => item.routerLink === '/timeline');
      if(timelineItem){
        this._selectedMenuItem = timelineItem;
        itemFound = true;
      }
    }
    if(!itemFound){
      this._selectedMenuItem = null;
      console.log("No menu item")
    }
  }



  public onClickMenuItem(item: MobileMenuItem){
    this.mobileMenuItems.forEach(item => item.unselect());
    item.onClick(this.router);
    this._menuIsExpanded = false;
  }
  public onClickImage(){
    if(this.selectedMenuItem?.routerLink === '/timeline'){
      this._menuIsExpanded = !this._menuIsExpanded;
    }
  }
  
  public onClickTopBar(){
    if(this.selectedMenuItem?.routerLink !== '/timeline'){
      this._menuIsExpanded = !this._menuIsExpanded;
    }
  }


}
