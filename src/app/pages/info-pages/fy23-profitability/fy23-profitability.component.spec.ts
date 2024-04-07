import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fy23ProfitabilityComponent } from './fy23-profitability.component';

describe('Fy23ProfitabilityComponent', () => {
  let component: Fy23ProfitabilityComponent;
  let fixture: ComponentFixture<Fy23ProfitabilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Fy23ProfitabilityComponent]
    });
    fixture = TestBed.createComponent(Fy23ProfitabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
