import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceSheetBarChartComponent } from './balance-sheet-bar-chart.component';

describe('BalanceSheetBarChartComponent', () => {
  let component: BalanceSheetBarChartComponent;
  let fixture: ComponentFixture<BalanceSheetBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalanceSheetBarChartComponent]
    });
    fixture = TestBed.createComponent(BalanceSheetBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
