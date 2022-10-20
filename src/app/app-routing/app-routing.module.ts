import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '../main-page/main-page.component';
import { MoviePageComponent } from '../movie-page/movie-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'movie/:id', component: MoviePageComponent },
  { path: 'hi', component: MoviePageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
