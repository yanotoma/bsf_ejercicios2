import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import IUser = MyApp.Models.IUser;

@Injectable()
export class UserProfileService{
    isLoggedIn: boolean = false;
    userObserver: Observable<IUser>;
    baseUrl = 'http://localhost:3000';

    constructor(private http: Http) { }

    login(user: IUser): Observable<Array<IUser>> {
        const requestUrl = `${this.baseUrl}/users`;
        
        let options: RequestOptions = new RequestOptions({
            params: user
        });

        return this.userObserver = this.http.get(requestUrl, options).map(res => res.json() );
    }
}