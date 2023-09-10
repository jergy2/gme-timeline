import { Component } from '@angular/core';
import { faSliders, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from '../sidebar/sidebar.service';
import { trigger, state, style, animate, transition, keyframes, } from '@angular/animations';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private _sidebarService: SidebarService){}


}
