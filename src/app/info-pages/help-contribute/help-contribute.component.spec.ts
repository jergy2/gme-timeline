import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpContributeComponent } from './help-contribute.component';

describe('HelpContributeComponent', () => {
  let component: HelpContributeComponent;
  let fixture: ComponentFixture<HelpContributeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpContributeComponent]
    });
    fixture = TestBed.createComponent(HelpContributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
