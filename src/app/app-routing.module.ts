import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialsComponent } from './pages/financials/financials.component';
import { DisplayTimelineComponent } from './pages/display-timeline/display-timeline.component';
import { OwnershipComponent } from './pages/ownership/ownership.component';

const routes: Routes = [
  { path: '*', component: DisplayTimelineComponent },
  { path: 'timeline', component: DisplayTimelineComponent },
  { path: 'financials', component: FinancialsComponent },
  { path: 'ownership', component: OwnershipComponent },
  { path: '**', component: DisplayTimelineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
