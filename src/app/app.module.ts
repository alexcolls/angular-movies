import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MenuComponent } from './menu/menu.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { MoviePageComponent } from './movie-page/movie-page.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MenuComponent,
    HeroSectionComponent,
    MainSectionComponent,
    MoviePageComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
