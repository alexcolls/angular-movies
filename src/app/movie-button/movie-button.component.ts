import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-button',
  templateUrl: './movie-button.component.html',
  styleUrls: ['./movie-button.component.scss']
})
export class MovieButtonComponent implements OnInit {

  menu: boolean = false;

  constructor() { }

  toggleMenu() {
    this.menu = !this.menu; 
  }

  ngOnInit(): void {
  }

}
