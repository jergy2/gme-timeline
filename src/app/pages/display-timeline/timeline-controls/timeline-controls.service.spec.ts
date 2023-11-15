import { TestBed } from '@angular/core/testing';

import { TimelineControlsService } from './timeline-controls.service';

describe('TimelineControlsService', () => {
  let service: TimelineControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimelineControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
