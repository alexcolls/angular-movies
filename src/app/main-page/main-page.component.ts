import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  muteVid: boolean = false;

  constructor() { }

  muteVideo() {
    this.muteVid = !this.muteVid;
  }
  ngOnInit(): void {
  }

}
