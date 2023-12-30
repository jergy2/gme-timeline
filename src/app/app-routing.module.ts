import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialsComponent } from './pages/financials/financials.component';
import { DisplayTimelineComponent } from './pages/display-timeline/display-timeline.component';
import { AboutComponent } from './pages/about/about.component';
import { GuideComponent } from './pages/guide/guide.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ResearchComponent } from './pages/research/research.component';

const routes: Routes = [
  { path: '*', component: DisplayTimelineComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'timeline', component: DisplayTimelineComponent },
  { path: 'earnings', component: FinancialsComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'about', component: AboutComponent },
  { path: 'research', component: ResearchComponent },
  { path: '**', redirectTo: 'timeline' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
