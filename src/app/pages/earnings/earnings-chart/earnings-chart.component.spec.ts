import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningsChartComponent } from './earnings-chart.component';

describe('EarningsChartComponent', () => {
  let component: EarningsChartComponent;
  let fixture: ComponentFixture<EarningsChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EarningsChartComponent]
    });
    fixture = TestBed.createComponent(EarningsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
