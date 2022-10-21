import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-menu',
  templateUrl: './movie-menu.component.html',
  styleUrls: ['./movie-menu.component.scss']
})
export class MovieMenuComponent implements OnInit {

  menu: boolean = false;

  constructor() { }

  toggleMenu() {
    this.menu = !this.menu; 
  }

  ngOnInit(): void {
  }

}
