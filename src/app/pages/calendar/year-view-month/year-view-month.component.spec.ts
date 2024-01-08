import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearViewMonthComponent } from './year-view-month.component';

describe('YearViewMonthComponent', () => {
  let component: YearViewMonthComponent;
  let fixture: ComponentFixture<YearViewMonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YearViewMonthComponent]
    });
    fixture = TestBed.createComponent(YearViewMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
