import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcInterviewComponent } from './rc-interview.component';

describe('RcInterviewComponent', () => {
  let component: RcInterviewComponent;
  let fixture: ComponentFixture<RcInterviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RcInterviewComponent]
    });
    fixture = TestBed.createComponent(RcInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
