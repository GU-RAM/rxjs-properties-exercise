import { Component, OnInit } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
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
  ];

  people: Person[] = [
    { id: 1, name: 'gurami', lastname: 'dgebuadze', jobId: 2 },
    { id: 2, name: 'giorgi', lastname: 'kapanadze', jobId: 3 },
    { id: 3, name: 'temur', lastname: 'takalandze', jobId: 1 },
  ];

  getPeople(job: string[]): Observable<string[]> {
    return of(job).pipe(
      switchMap((jobNameArr) =>
        of(this.jobs.filter((job) => jobNameArr.includes(job.name)))
      ),
      map((chosenJobsArr) => {
        return chosenJobsArr.map((job: Job) => {
          let jobName = job.name;
          let personIdentified = this.people.filter(
            (person) => person.jobId === job.id
          );
          return `${personIdentified[0].name} ${personIdentified[0].lastname} is a ${jobName}`;
        });
      })
    );
  }

  ngOnInit() {
    this.getPeople(['Mrecxavi', 'Damlagebeli']).subscribe(console.log);
  }
}
