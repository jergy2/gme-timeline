import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpContributeComponent } from './help-contribute/help-contribute.component';
import { LoadingComponent } from './loading/loading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    HelpContributeComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports:[
    HelpContributeComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
