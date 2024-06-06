import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarningsComponent } from './pages/earnings/earnings.component';
import { DisplayTimelineComponent } from './pages/display-timeline/display-timeline.component';
import { AboutComponent } from './pages/about/about.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ResearchComponent } from './pages/research/research.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { GuideComponent } from './info-pages/guide/guide.component';
import { Fy23ProfitabilityComponent } from './info-pages/fy23-profitability/fy23-profitability.component';
import { RcInterviewComponent } from './info-pages/rc-interview/rc-interview.component';
import { SneezeComponent } from './info-pages/sneeze/sneeze.component';
import { DrsComponent } from './info-pages/drs/drs.component';
import { MediaComponent } from './info-pages/media/media.component';
import { OwnershipComponent } from './info-pages/ownership/ownership.component';
import { SocialMediaComponent } from './pages/social-media/social-media.component';
import { RedditComponent } from './info-pages/reddit/reddit.component';
import { RoaringKittyComponent } from './info-pages/roaring-kitty/roaring-kitty.component';
import { MoassComponent } from './info-pages/moass/moass.component';

const routes: Routes = [
  { path: '*', component: DisplayTimelineComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'timeline', component: DisplayTimelineComponent },
  { path: 'earnings', component: EarningsComponent },
  { path: 'financials', component: EarningsComponent },
  { path: 'ownership', component: OwnershipComponent},
  { path: 'social-media', component: SocialMediaComponent },
  { path: 'about', component: AboutComponent },


  { path: 'drs', component: DrsComponent },
  { path: 'fy23-profitability', component: Fy23ProfitabilityComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'media', component: MediaComponent },
  { path: 'moass', component: MoassComponent }, 
  { path: 'propaganda', component: MediaComponent }, 
  { path: 'rc-interview', component: RcInterviewComponent },
  { path: 'rc-interview-november-2022', component: RcInterviewComponent },
  { path: 'reddit', component: RedditComponent },
  { path: 'DeepFuckingValue', component: RoaringKittyComponent },
  { path: 'dfv', component: RoaringKittyComponent },
  { path: 'roaring-kitty', component: RoaringKittyComponent },
  { path: 'sneeze', component: SneezeComponent },
  { path: 'sneeze-january-2021', component: SneezeComponent },

  
  { path: 'research', component: ResearchComponent },
  { path: 'sandbox', component: SandboxComponent },


  { path: '**', redirectTo: 'timeline' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
