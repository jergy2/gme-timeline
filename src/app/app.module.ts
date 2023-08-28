import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { TimelineItemComponent } from './timeline-items/timeline-item/timeline-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './chart/chart.component';
import { EventLegendComponent } from './chart/event-legend/event-legend.component';
import { LegendItemComponent } from './chart/event-legend/legend-item/legend-item.component';
import { CustomTooltipComponent } from './chart/custom-tooltip/custom-tooltip.component';
import { TimelineItemsComponent } from './timeline-items/timeline-items.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineItemComponent,
    ChartComponent,
    EventLegendComponent,
    LegendItemComponent,
    CustomTooltipComponent,
    TimelineItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
