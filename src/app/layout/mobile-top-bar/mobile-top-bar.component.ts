import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { IconDefinition, faSliders, faQuestion, faCoins, faChartLine, faChartPie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mobile-top-bar',
  templateUrl: './mobile-top-bar.component.html',
  styleUrls: ['./mobile-top-bar.component.scss']
})
export class MobileTopBarComponent {

  constructor(private router: Router){}

  private _mouseIsIn: boolean = false;
  private _isMinimized: boolean = true;
  private _showAbout: boolean = false;
  private _showTimeline: boolean = false;
  public get isMinimized(): boolean { return this._isMinimized; }
  public get isExpanded(): boolean { return !this._isMinimized; }

  public get isTimeline(): boolean { return this.router.url === '/timeline'; }
  public get showTimeline(): boolean { return this.router.url === '/timeline' && this._showTimeline; }

  public get faSliders(): IconDefinition { return faSliders; }
  public get faQuestion(): IconDefinition { return faQuestion; }
  public get showAbout(): boolean { return this._showAbout; }


  ngOnInit(){
  }

  public onClickAbout(){
    this._showTimeline = false;
    if(this._isMinimized === false){
      this._isMinimized = true;
      this._showAbout = false;
    }else{
      this._isMinimized = false;
      this._showAbout = true;
    }
  }

  public onClickControls(){
    this._showAbout = false;
    if(this._isMinimized === false){
      this._isMinimized = true;
      this._showTimeline = false;
    }else{
      this._isMinimized = false;
      this._showTimeline = true;
    }
  }
    
  public onMouseLeave(){
    this._mouseIsIn = false;
  }
  public onMouseEnter(){
    this._mouseIsIn = true;
  }
  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    if(!this._mouseIsIn){
      event.preventDefault();
      this._isMinimized = true;
      this._showAbout = false;
    }
  }
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    // if(!this._mouseIsIn){
    //   // event.preventDefault();
    //   this._isMinimized = true;
    // }
  }


}
