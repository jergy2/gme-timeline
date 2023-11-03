import { Component, Input } from '@angular/core';
import { InformationPoint } from './information-point.interface';

@Component({
  selector: 'app-information-point',
  templateUrl: './information-point.component.html',
  styleUrls: ['./information-point.component.scss']
})
export class InformationPointComponent {

  private _infoPoint: InformationPoint | null = null;
  @Input('infoPoint') public set infoPoint(infoPoint: InformationPoint) { this._infoPoint = infoPoint; }
  public get infoPoint(): InformationPoint | null { return this._infoPoint; }

}
