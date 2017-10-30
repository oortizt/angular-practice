import { Component } from '@angular/core';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  title="Movie casting"
  titleMovie = "";

  constructor() { }

  onKeyUp() {
        console.log("Enter was pressed! " + this.titleMovie);
    }

}
