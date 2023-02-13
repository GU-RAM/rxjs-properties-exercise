import { Component, OnInit } from '@angular/core';
import {
  map,
  Observable,
  of,
  switchMap,
  tap,
  reduce,
  from,
  forkJoin,
  mergeMap,
} from 'rxjs';
import { Job, Person } from '../model';

@Component({
  selector: 'app-populate-jobs-persons',
  templateUrl: './populate-jobs-persons.component.html',
  styleUrls: ['./populate-jobs-persons.component.scss'],
})
export class PopulateJobsPersonsComponent implements OnInit {
  jobs: Job[] = [
    { id: 1, name: 'Developer' },
    { id: 2, name: 'Damlagebeli' },
    { id: 3, name: 'Mrecxavi' },
    { id: 4, name: 'Moragbe' },
  ];

  people: Person[] = [
    { id: 1, name: 'gurami', lastname: 'dgebuadze', jobId: 2 },
    { id: 2, name: 'giorgi', lastname: 'kapanadze', jobId: 3 },
    { id: 3, name: 'temur', lastname: 'takalandze', jobId: 1 },
    { id: 4, name: 'farnaoz', lastname: 'chilashvili', jobId: 4 },
  ];

  getJob(jobName: string): Observable<Job> {
    return of(...this.jobs.filter((person) => person.name === jobName));
  }

  getPeople(jobId: number): Observable<Person[]> {
    return of(this.people.filter((person) => person.jobId === jobId));
  }

  getResult(jobNames: string[]): any {
    return of(jobNames).pipe(
      switchMap((jobNames) =>
        forkJoin([...jobNames.map((jobName: any) => this.getJob(jobName))])
      ),
      mergeMap((jobs) => {
        return forkJoin(
          jobs.map((job: any) => {
            return this.getPeople(job.id).pipe(
              map((person) => {
                return {
                  ...person[0],
                  job: job.name,
                };
              })
            );
          })
        );
      }),
      tap(console.log)
    );
  }

  ngOnInit() {
    this.getResult(['Mrecxavi', 'Damlagebeli', 'Moragbe']).subscribe((x: any) =>
      console.log(x)
    );
  }
}
