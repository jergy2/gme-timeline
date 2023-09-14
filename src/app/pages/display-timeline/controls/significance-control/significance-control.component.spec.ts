import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignificanceControlComponent } from './significance-control.component';

describe('SignificanceControlComponent', () => {
  let component: SignificanceControlComponent;
  let fixture: ComponentFixture<SignificanceControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignificanceControlComponent]
    });
    fixture = TestBed.createComponent(SignificanceControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
