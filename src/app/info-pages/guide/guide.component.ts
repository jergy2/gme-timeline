import { Component, OnInit } from '@angular/core';
import { InformationPoint } from './information-point/information-point.interface';
import { informationPoints } from './information-point/information-points';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {

  private _informationPoints: InformationPoint[] = informationPoints;
  public get informationPoints(): InformationPoint[] { return this._informationPoints; }

  ngOnInit(){

  }
}
