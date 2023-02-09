import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulateJobsPersonsComponent } from './populate-jobs-persons.component';

describe('PopulateJobsPersonsComponent', () => {
  let component: PopulateJobsPersonsComponent;
  let fixture: ComponentFixture<PopulateJobsPersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulateJobsPersonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopulateJobsPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
