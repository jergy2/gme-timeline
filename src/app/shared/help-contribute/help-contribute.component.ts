import { Component } from '@angular/core';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-help-contribute',
  templateUrl: './help-contribute.component.html',
  styleUrls: ['./help-contribute.component.scss']
})
export class HelpContributeComponent {

  public get faTriangle() { return faTriangleExclamation; }
private _isExpanded :boolean = false;
public get isExpanded(): boolean { return this._isExpanded; }

  public onClickContainer(){
    this._isExpanded = !this._isExpanded;
  }

}

