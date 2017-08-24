import { Observable } from 'rxjs/Rx';
import { Http, URLSearchParams } from '@angular/http';

import { Injectable } from '@angular/core';
import IBooks = MyApp.Models.IBooks;
import IBookFilterParam = MyApp.Models.IBookFilterParam;

@Injectable()
export class BooksService {
    booksObserver: Observable<IBooks[]>;
    baseUrl: string = "http://localhost:3000";


    constructor( private http:Http) { }

    getList(filters: IBookFilterParam): Observable<Array<IBooks>> {
        const requestUrl = `${this.baseUrl}/books`;

        let params = new URLSearchParams();
        params.set('_sort', filters.sortBy );
        params.set('_order', 'ASC' );

        return this.booksObserver = this.http.get(requestUrl, { search: params }).map(res => res.json() );
    }
    
}