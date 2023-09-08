import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { TimelineItemComponent } from './timeline-items/timeline-item/timeline-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './chart/chart.component';
import { CustomTooltipComponent } from './chart/custom-tooltip/custom-tooltip.component';
import { TimelineItemsComponent } from './timeline-items/timeline-items.component';
import { ControlsComponent } from './layout/controls/controls.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignificanceControlComponent } from './layout/controls/significance-control/significance-control.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineItemComponent,
    ChartComponent,
    CustomTooltipComponent,
    TimelineItemsComponent,
    ControlsComponent,
    SignificanceControlComponent,
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
