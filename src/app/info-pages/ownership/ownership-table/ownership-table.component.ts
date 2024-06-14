import { Component, Input } from '@angular/core';
import { OwnershipData } from '../ownership-data.class';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-ownership-table',
  templateUrl: './ownership-table.component.html',
  styleUrls: ['./ownership-table.component.scss']
})
export class OwnershipTableComponent {

  public get data(): OwnershipData { return new OwnershipData(); }

  public get lastUpdated(): string { 
    return dayjs((new OwnershipData()).lastUpdateYYYYMMDD).format('MMMM D, YYYY')
  }

  public get tso(): string { return (this.data.tso / 1000000).toFixed(1); }

  public get drsNumber(): number { return this.data.drs.value / 1000000; }
  public get dsppNumber(): number { return this.data.dspp.value / 1000000; }
  public get totalRegistered(): number { return this.drsNumber + this.dsppNumber; }

  public get rkNumber(): number { return this.data.rk.value / 1000000; }

  public get rcNumber(): number { return this.data.rc.value / 1000000; }
  public get otherInsiders(): number { return this.data.otherInsiders.value / 1000000; }
  public get insidersTotal(): number { return this.rcNumber + this.otherInsiders; }

  public get vanguard(): number { return this.data.vanguard.value / 1000000; }
  public get blackrock(): number { return this.data.blackrock.value / 1000000; }
  public get statestreet(): number { return this.data.statestreet.value / 1000000; }
  public get otherInst(): number { return this.data.otherInstitutional.value / 1000000; }
  public get instTotal(): number { return this.vanguard + this.blackrock + this.statestreet + this.otherInst; }

  public get remainderTotal(): number { return this.data.remainderTotal;  }
  public get beneficial(): number { return this.data.totalBeneficial; }
  


  public percent(section: number): string{
    return ((section / (this.data.tso/1000000)) * 100).toFixed(1);
  }
}
