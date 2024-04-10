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
import { FinancialsComponent } from './pages/financials/financials.component';
import { DisplayTimelineComponent } from './pages/display-timeline/display-timeline.component';
import { OwnershipComponent } from './pages/ownership/ownership.component';
import { BalanceSheetComponent } from './pages/financials/balance-sheet/balance-sheet.component';
import { BalanceSheetBarChartComponent } from './pages/financials/balance-sheet-bar-chart/balance-sheet-bar-chart.component';
import { MobileTopBarComponent } from './layout/mobile-top-bar/mobile-top-bar.component';
import { TimelineListItemComponent } from './pages/display-timeline/timeline-items/timeline-list-item/timeline-list-item.component';
import { QuarterlyResultComponent } from './pages/display-timeline/timeline-items/quarterly-result/quarterly-result.component';
import { EarningsTableComponent } from './pages/financials/earnings-table/earnings-table.component';
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
import { SuperstonkComponent } from './pages/info-pages/superstonk/superstonk.component';
import { RedditComponent } from './pages/info-pages/reddit/reddit.component';
import { DrsComponent } from './pages/info-pages/drs/drs.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { Fy23ProfitabilityComponent } from './pages/info-pages/fy23-profitability/fy23-profitability.component';
import { LoadingComponent } from './layout/loading/loading.component';
import { RcInterviewComponent } from './pages/info-pages/rc-interview/rc-interview.component';
import { GuideComponent } from './pages/info-pages/guide/guide.component';
import { InformationPointComponent } from './pages/info-pages/guide/information-point/information-point.component';
import { NewsArticleComponent } from './pages/info-pages/fy23-profitability/news-article/news-article.component';

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
    FinancialsComponent,
    DisplayTimelineComponent,
    OwnershipComponent,
    BalanceSheetComponent,
    BalanceSheetBarChartComponent,
    MobileTopBarComponent,
    ViewControlComponent,
    TimelineListItemComponent,
    QuarterlyResultComponent,
    EarningsTableComponent,
    GuideComponent,
    InformationPointComponent,
    SearchControlComponent,
    SettingsControlsComponent,
    ChaptersControlComponent,
    CalendarComponent,
    ResearchComponent,
    MonthComponent,
    YearViewMonthComponent,
    SeoComponent,
    SuperstonkComponent,
    RedditComponent,
    DrsComponent,
    SandboxComponent,
    Fy23ProfitabilityComponent,
    LoadingComponent,
    RcInterviewComponent,
    NewsArticleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgChartsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
