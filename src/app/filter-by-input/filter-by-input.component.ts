import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounce,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
} from 'rxjs';

@Component({
  selector: 'app-filter-by-input',
  templateUrl: './filter-by-input.component.html',
  styleUrls: ['./filter-by-input.component.scss'],
})
export class FilterByInputComponent implements AfterViewInit {
  search = new FormControl();
  moviesFound: string[] = [];
  itemsList = [
    { name: 'Inception' },
    { name: 'Avatar' },
    { name: 'Forrest Gump' },
    { name: 'The Matrix' },
    { name: 'The Lion King' },
    { name: 'Jurassic Park' },
    { name: 'Terminator 2: Judgment Day' },
    { name: 'The Silence of the Lambs' },
    { name: 'Goodfellas' },
    { name: 'The Terminator' },
    { name: 'Saving Private Ryan' },
    { name: 'Raiders of the Lost Ark' },
    { name: 'The Prestige' },
    { name: 'Gladiator' },
    { name: 'The Dark Knight Rises' },
    { name: 'The Incredibles' },
    { name: 'The Departed' },
    { name: 'Whiplash' },
    { name: 'The Grand Budapest Hotel' },
  ];

  apiCall() {
    console.log('server is called');
  }

  callApi(value: string) {
    const movieNameIncluded = this.itemsList.filter((movies) =>
      movies.name.toLocaleLowerCase().includes(value.toLowerCase())
    );
    if (movieNameIncluded.length) {
      this.moviesFound = [];
      console.log('Api Call, with value', movieNameIncluded);
      return movieNameIncluded.map((movies) => {
        console.log(this.moviesFound);
        return this.moviesFound.push(movies.name);
      });
    }
    return (this.moviesFound = []);
  }

  ngAfterViewInit() {
    this.search.valueChanges
      .pipe(debounceTime(70), distinctUntilChanged())
      .subscribe((value) => this.callApi(value));
  }
}
