import { Component, OnInit } from '@angular/core';
import { trailers } from './trailers';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {

  time: string = '0';
  title: string = '';

  constructor() { }

  getTrailer() {
    const i = Math.floor(Math.random() * trailers.length);
    this.time = trailers[i].time;
    this.title = trailers[i].title;
  }

  ngOnInit(): void {
    this.getTrailer();
  }

}
