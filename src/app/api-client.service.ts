import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  rootUrl = 'http://cw-api.eu-west-3.elasticbeanstalk.com/movied/'

  constructor(private http: HttpClient) { }

  getDiscoverMovies(): Observable<any> {
    return this.http.get(this.rootUrl+'discover');
  }
  
  getCategoryMovies(categoryId: string): Observable<any> {
    return this.http.get(this.rootUrl+'categories/'+categoryId);
  }

  getCategories(): Observable<any> {
    return this.http.get(this.rootUrl+'categories');
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get(this.rootUrl+'movie/'+id);
  };
  
}
