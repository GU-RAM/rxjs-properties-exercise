import { AfterViewInit, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Movie } from '../model';

@Component({
  selector: 'app-filter-by-input',
  templateUrl: './filter-by-input.component.html',
  styleUrls: ['./filter-by-input.component.scss'],
})
export class FilterByInputComponent implements AfterViewInit {
  search = new FormControl();
  moviesFound: string[] = [];
  movieList = [
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
    { name: 'Pulp Fiction' },
    { name: "Schindler's List" },
    { name: 'The Green Mile' },
    { name: 'The Intouchables' },
    { name: 'Life is Beautiful' },
    { name: 'The Pianist' },
    { name: 'The Shining' },
    { name: 'Back to the Future' },
    { name: 'E.T. the Extra-Terrestrial' },
    { name: 'Raiders of the Lost Ark' },
    { name: 'Indiana Jones and the Temple of Doom' },
    { name: 'Indiana Jones and the Last Crusade' },
    { name: 'Jaws' },
    { name: 'Star Wars: Episode IV - A New Hope' },
    { name: 'Star Wars: Episode V - The Empire Strikes Back' },
    { name: 'Star Wars: Episode VI - Return of the Jedi' },
    { name: 'The Terminator' },
    { name: 'Terminator 2: Judgment Day' },
    { name: 'The Terminator 3: Rise of the Machines' },
    { name: 'Terminator: Salvation' },
    { name: 'Terminator: Genisys' },
    { name: 'Jurassic Park' },
    { name: 'The Lost World: Jurassic Park' },
    { name: 'Jurassic Park III' },
    { name: 'Jurassic World' },
    { name: 'Jurassic World: Fallen Kingdom' },
    { name: "Harry Potter and the Philosopher's Stone" },
    { name: 'Harry Potter and the Chamber of Secrets' },
    { name: 'Harry Potter and the Prisoner of Azkaban' },
    { name: 'Harry Potter and the Goblet of Fire' },
    { name: 'Harry Potter and the Order of Phoenix' },
    { name: 'Harry Potter and the Half-Blood Prince' },
    { name: 'Harry Potter and the Deathly Hallows – Part 1' },
    { name: 'Harry Potter and the Deathly Hallows – Part 2' },
    { name: 'The Lord of the Rings: The Fellowship of the Ring' },
    { name: 'The Lord of the Rings: The Two Towers' },
  ];

  apiCall() {
    console.log('server is called');
  }

  callApi(value: string) {
    let movieNameIncluded: Movie[] = [];
    if (value.length) {
      movieNameIncluded = this.movieList.filter(
        (movies) =>
          movies.name.toLocaleLowerCase().startsWith(value.toLowerCase())
        // movies.name.toLocaleLowerCase().includes(value.toLowerCase())
      );
    }
    console.log(movieNameIncluded.length);
    if (movieNameIncluded.length) {
      this.moviesFound = [];
      console.log('Api Call, with value', movieNameIncluded);
      return movieNameIncluded.map((movies: Movie) => {
        console.log(this.moviesFound);
        return this.moviesFound.push(movies.name);
      });
    }
    return (this.moviesFound = []);
  }

  ngAfterViewInit() {
    this.search.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((value) => this.callApi(value));
  }
}
