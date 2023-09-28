import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterlyResultComponent } from './quarterly-result.component';

describe('QuarterlyResultComponent', () => {
  let component: QuarterlyResultComponent;
  let fixture: ComponentFixture<QuarterlyResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuarterlyResultComponent]
    });
    fixture = TestBed.createComponent(QuarterlyResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
