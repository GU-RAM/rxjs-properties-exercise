import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { scrollDownDirective } from './directives/scrollDown.directive';
import { ScrollDownComponent } from './scroll-down/scroll-down.component';
import { PopulateJobsPersonsComponent } from './populate-jobs-persons/populate-jobs-persons.component';

@NgModule({
  declarations: [AppComponent, scrollDownDirective, ScrollDownComponent, PopulateJobsPersonsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
