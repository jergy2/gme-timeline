import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPointComponent } from './information-point.component';

describe('InformationPointComponent', () => {
  let component: InformationPointComponent;
  let fixture: ComponentFixture<InformationPointComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformationPointComponent]
    });
    fixture = TestBed.createComponent(InformationPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
