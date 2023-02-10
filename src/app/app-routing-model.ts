import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterByInputComponent } from './filter-by-input/filter-by-input.component';
import { PopulateJobsPersonsComponent } from './populate-jobs-persons/populate-jobs-persons.component';
import { ScrollDownComponent } from './scroll-down/scroll-down.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ScrollDownComponent,
  },
  {
    path: 'populate',
    component: PopulateJobsPersonsComponent,
  },
  {
    path: 'filter',
    component: FilterByInputComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
