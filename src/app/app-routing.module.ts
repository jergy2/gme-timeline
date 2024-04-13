import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialsComponent } from './pages/financials/financials.component';
import { DisplayTimelineComponent } from './pages/display-timeline/display-timeline.component';
import { AboutComponent } from './pages/about/about.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ResearchComponent } from './pages/research/research.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { Fy23ProfitabilityComponent } from './pages/info-pages/fy23-profitability/fy23-profitability.component';
import { GuideComponent } from './pages/info-pages/guide/guide.component';
import { RcInterviewComponent } from './pages/info-pages/rc-interview/rc-interview.component';
import { DrsComponent } from './pages/info-pages/drs/drs.component';
import { SneezeComponent } from './pages/info-pages/sneeze/sneeze.component';

const routes: Routes = [
  { path: '*', component: DisplayTimelineComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'timeline', component: DisplayTimelineComponent },
  { path: 'earnings', component: FinancialsComponent },
  { path: 'financials', component: FinancialsComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'about', component: AboutComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'sandbox', component: SandboxComponent },
  { path: 'fy23-profitability', component: Fy23ProfitabilityComponent },
  { path: 'rc-interview-november-2022', component: RcInterviewComponent },
  { path: 'rc-interview', component: RcInterviewComponent },
  { path: 'sneeze', component: SneezeComponent },
  { path: 'sneeze-january-2021', component: SneezeComponent },
  { path: 'drs', component: DrsComponent },
  { path: '**', redirectTo: 'timeline' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
