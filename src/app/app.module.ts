import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { TimelineItemComponent } from './pages/display-timeline/timeline-items/timeline-item/timeline-item.component';
import { ChartComponent } from './pages/display-timeline/chart/chart.component';
import { CustomTooltipComponent } from './pages/display-timeline/chart/custom-tooltip/custom-tooltip.component';
import { TimelineItemsComponent } from './pages/display-timeline/timeline-items/timeline-items.component';
import { AboutComponent } from './pages/about/about.component';
import { EarningsComponent } from './pages/earnings/earnings.component';
import { DisplayTimelineComponent } from './pages/display-timeline/display-timeline.component';
import { MobileTopBarComponent } from './layout/mobile-top-bar/mobile-top-bar.component';
import { TimelineListItemComponent } from './pages/display-timeline/timeline-items/timeline-list-item/timeline-list-item.component';
import { QuarterlyResultComponent } from './pages/display-timeline/timeline-items/quarterly-result/quarterly-result.component';
import { EarningsTableComponent } from './pages/earnings/earnings-table/earnings-table.component';
import { SignificanceControlComponent } from './pages/display-timeline/timeline-controls/significance-control/significance-control.component';
import { ControlsComponent } from './pages/display-timeline/timeline-controls/timeline-controls.component';
import { CategoryControlComponent } from './pages/display-timeline/timeline-controls/category-control/category-control.component';
import { ViewControlComponent } from './pages/display-timeline/timeline-controls/view-control/view-control.component';
import { SearchControlComponent } from './pages/display-timeline/timeline-controls/search-control/search-control.component';
import { SettingsControlsComponent } from './pages/display-timeline/timeline-controls/settings-controls/settings-controls.component';
import { ChaptersControlComponent } from './pages/display-timeline/timeline-controls/chapters-control/chapters-control.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ResearchComponent } from './pages/research/research.component';
import { MonthComponent } from './pages/calendar/month/month.component';
import { YearViewMonthComponent } from './pages/calendar/year-view-month/year-view-month.component';
import { SeoComponent } from './pages/about/seo/seo.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { LoadingComponent } from './layout/loading/loading.component';
import { InfoPagesModule } from './info-pages/info-pages.module';
import { SocialMediaComponent } from './pages/social-media/social-media.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineItemComponent,
    ChartComponent,
    CustomTooltipComponent,
    TimelineItemsComponent,
    SignificanceControlComponent,
    AboutComponent,
    ControlsComponent,
    SidebarComponent,
    LayoutComponent,
    CategoryControlComponent,
    EarningsComponent,
    DisplayTimelineComponent,
    MobileTopBarComponent,
    ViewControlComponent,
    TimelineListItemComponent,
    QuarterlyResultComponent,
    EarningsTableComponent,
    SearchControlComponent,
    SettingsControlsComponent,
    ChaptersControlComponent,
    CalendarComponent,
    ResearchComponent,
    MonthComponent,
    YearViewMonthComponent,
    SeoComponent,
    SandboxComponent,
    LoadingComponent,
    SocialMediaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgChartsModule,
    HttpClientModule,
    FontAwesomeModule,
    InfoPagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
