import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  movieID = String(this.router.url.split('/').at(-1));
  details: any;
  title = '';
  poster =  '';
  synopsis = '';
  
  constructor(private router: Router, private apiService: ApiClientService) { }

  ngOnInit(): void {
    const imageUrl = 'https://image.tmdb.org/t/p/w300/';
    this.apiService.getMovieDetails(this.movieID).subscribe(response => { 
      this.details = response;
      this.title = response.original_title;
      this.poster = imageUrl + response.poster_path;
      this.synopsis = response.overview;


      console.log(this.details);

    });
  }

}
