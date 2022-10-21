import { Component, Input, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Movie } from './movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input()
  listTitle = '';
  @Input()
  discover = false;

  movies: Movie[] = [];
  expand: boolean = false;
  
  constructor(private apiService: ApiClientService) {}

  toggleExpand() {
    this.expand = !this.expand;
  }

  closeExpand() {
    this.expand = false;
  }

  iterateMovies(response: any[]) {
    const imageUrl = 'https://image.tmdb.org/t/p/w300/';
    for (const res of response) {
      console.log(res);
      const movie: Movie = { 
        id: res.id,
        title: res.original_title,
        image: imageUrl + res.poster_path,
      };
      this.movies.push(movie);
    }
    this.shuffleMovies(this.movies)
  }

  shuffleMovies(movies: Movie[]) {
    for (let i = movies.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [movies[i], movies[j]] = [movies[j], movies[i]];
    }
  }

  ngOnInit(): void {
    if (this.discover) {
      this.apiService.getDiscoverMovies().subscribe(response => {
        this.iterateMovies(response);
      });
    } else {
      this.apiService.getCategories().subscribe(response => {
        const title = this.listTitle.toLowerCase();
        for (const category of response) {
          if ( category.name.toLowerCase() === title ) {
            this.apiService.getCategoryMovies(category.id).subscribe(response => {
              this.iterateMovies(response);
            });
            break;
          }
        }
      });     
    }
  }

}
