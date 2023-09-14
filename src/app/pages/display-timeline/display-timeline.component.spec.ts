import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTimelineComponent } from './display-timeline.component';

describe('DisplayTimelineComponent', () => {
  let component: DisplayTimelineComponent;
  let fixture: ComponentFixture<DisplayTimelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayTimelineComponent]
    });
    fixture = TestBed.createComponent(DisplayTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
