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
import { GuideComponent } from './pages/guide/guide.component';
import { InformationPointComponent } from './pages/guide/information-point/information-point.component';
import { SignificanceControlComponent } from './pages/display-timeline/timeline-controls/significance-control/significance-control.component';
import { ControlsComponent } from './pages/display-timeline/timeline-controls/timeline-controls.component';
import { CategoryControlComponent } from './pages/display-timeline/timeline-controls/category-control/category-control.component';
import { ViewControlComponent } from './pages/display-timeline/timeline-controls/view-control/view-control.component';
import { SearchControlComponent } from './pages/display-timeline/timeline-controls/search-control/search-control.component';
import { SettingsControlsComponent } from './pages/display-timeline/timeline-controls/settings-controls/settings-controls.component';
import { ChaptersControlComponent } from './pages/display-timeline/timeline-controls/chapters-control/chapters-control.component';

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
    ChaptersControlComponent
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
