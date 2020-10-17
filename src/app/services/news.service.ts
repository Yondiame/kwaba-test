import { Injectable } from '@angular/core';
import {HttpClient,  HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {News} from './news';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private url = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-16&sortBy=publishedAt&apiKey=ecaa248fe710466cb4b7be81b5c940bd';
  constructor(
    private http: HttpClient,
  ) { }

  public getNews(): Observable<News> {
    return this.http.get<News>(this.url).pipe(
      tap(_ => console.log('fetched heroes')),
      catchError(this.handleError<News>('getHeroes', {
        status: '',
        totalResults: 0,
        articles: []
      }))
    );
  }

  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
