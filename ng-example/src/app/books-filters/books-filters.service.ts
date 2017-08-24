import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import IOptionElement = MyApp.Models.IOptionElement;

@Injectable()
export class BooksFiltersService{

  booksObserver: Observable<IOptionElement[]>;
  baseUrl: string = "http://localhost:3000";


  constructor( private http:Http) { }

  getSortByOptions(): Observable<IOptionElement[]> {
      const requestUrl = `${this.baseUrl}/sortOptions`;
      return this.booksObserver = this.http.get(requestUrl).map(res => res.json() );
  }
}
