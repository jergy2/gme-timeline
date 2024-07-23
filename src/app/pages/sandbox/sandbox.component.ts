import { Component, OnInit } from '@angular/core';
import { TimelineItemsService } from '../display-timeline/timeline-items/timeline-items.service';
import { TimelineEvent } from '../display-timeline/timeline-items/timeline-item/timeline-event.class';
import { TimelineEventURL } from '../display-timeline/timeline-items/timeline-item/timeline-event-url.interface';
import { TimelineEventType } from '../display-timeline/timeline-items/timeline-item/timeline-event-type.enum';
import { HttpClient } from '@angular/common/http';
import { TimelineEventConfig } from '../display-timeline/timeline-items/timeline-item/timeline-event-config.interface';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {

  constructor(private itemService: TimelineItemsService, private httpClient: HttpClient) { }


  public get items(): TimelineEvent[] { return this.itemService.allTimelineItems }

  ngOnInit(): void {

  }

}
