import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLegendComponent } from './event-legend.component';

describe('EventLegendComponent', () => {
  let component: EventLegendComponent;
  let fixture: ComponentFixture<EventLegendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventLegendComponent]
    });
    fixture = TestBed.createComponent(EventLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
