import { Component } from '@angular/core';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-moass-alert',
  templateUrl: './moass-alert.component.html',
  styleUrls: ['./moass-alert.component.scss']
})
export class MoassAlertComponent {

  public get faTriangle() { return faTriangleExclamation; }

}
