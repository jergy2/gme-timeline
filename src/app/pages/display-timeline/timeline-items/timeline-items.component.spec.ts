import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineItemsComponent } from './timeline-items.component';

describe('TimelineItemsComponent', () => {
  let component: TimelineItemsComponent;
  let fixture: ComponentFixture<TimelineItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineItemsComponent]
    });
    fixture = TestBed.createComponent(TimelineItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
