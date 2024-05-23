import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceSheetComponent } from './balance-sheet.component';

describe('BalanceSheetComponent', () => {
  let component: BalanceSheetComponent;
  let fixture: ComponentFixture<BalanceSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalanceSheetComponent]
    });
    fixture = TestBed.createComponent(BalanceSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
