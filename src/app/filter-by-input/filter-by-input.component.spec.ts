import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByInputComponent } from './filter-by-input.component';

describe('FilterByInputComponent', () => {
  let component: FilterByInputComponent;
  let fixture: ComponentFixture<FilterByInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterByInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
