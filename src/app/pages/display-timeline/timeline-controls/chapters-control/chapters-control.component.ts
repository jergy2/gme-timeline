import { Component, OnInit } from '@angular/core';
import { Chapter } from './chapter.class';
import { chapterConfigs } from './chapters';
import { EventSearchService } from '../search/event-search.service';
import { TimelineItemsService } from '../../timeline-items/timeline-items.service';
import { ChartDataManagerService } from '../../chart/chart-data-manager-service';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-chapters-control',
  templateUrl: './chapters-control.component.html',
  styleUrls: ['./chapters-control.component.scss']
})
export class ChaptersControlComponent implements OnInit {

  private _chapters: Chapter[] = [];
  public get chapters(): Chapter[] { return this._chapters; }

  private _chaptersGroupedByYear: {year: string, chapters: Chapter[]}[] = [];
  public get chaptersGroupedByYear(): {year: string, chapters: Chapter[]}[] { return this._chaptersGroupedByYear; }

  constructor(private _searchService: EventSearchService,
    private _eventService: TimelineItemsService,
    private _chartService: ChartDataManagerService,) { }

  ngOnInit(): void {
    this._chapters = chapterConfigs.map(cc => new Chapter(cc))
    // .sort((c1, c2)=>{
    //   if(c1.dateStartYYYYMMDD < c2.dateStartYYYYMMDD){
    //     return 1;
    //   }else if(c1.dateStartYYYYMMDD > c2.dateStartYYYYMMDD){
    //     return -1;
    //   }else{
    //     return 0;
    //   }
    // });

    const groupings = ['2020', '2021', '2022', '2023'].map(year => {
      return {year:year, chapters: new Array<Chapter>}
    });

    this._chapters.forEach(chapter =>{
       groupings.forEach(year => {
        if(chapter.yearGroup === year.year){
          year.chapters.push(chapter)
        }
       })
    })
    this._chaptersGroupedByYear = groupings.sort((g1, g2)=>{
      if(g1.year < g2.year){
        return 1;
      }else if(g1.year > g2.year){
        return -1;
      }else{
        return 0;
      }
    });;
  }

  public onClickChapter(chapter: Chapter) {

    const today = dayjs().format('YYYY-MM-DD');
    let endDate = today;
    if(chapter.dateEndYYYYMMDD !== ''){
      endDate = chapter.dateEndYYYYMMDD
    }
    const chapterEvents = this._searchService.getEventsByDates(chapter.dateStartYYYYMMDD, endDate);
    this._eventService.setDisplayedTimelineEvents(chapterEvents);


    this._chartService.updateDateRange(chapter.dateStartYYYYMMDD, chapter.dateEndYYYYMMDD);
    this._chartService.updateDisplayedEvents(chapterEvents);
    
  }
}
