import { CurrentWeather } from '../_Models/CurrentWeather';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import ICurrentWeather = MyApp.Models.ICurrentWeather;

@Injectable()
export class WeatherService {
    weatherObserver: Observable<ICurrentWeather>;
    key = '74954793a7b34830b8ad6e9d3c43cd56';
    baseUrl = 'https://api.weatherbit.io/v1.0/';

    constructor(private http: Http) { }

    getWeather(): Observable<ICurrentWeather> {
        const requestUrl = `${this.baseUrl}current/postal?key=${this.key}&postal_code=10001&country=US&lang=es`;
        return this.weatherObserver = this.http.get(requestUrl).map(res => new CurrentWeather(res.json().data[0]));
    }

    getForecast(): Observable<any> {
        const requestUrl = `${this.baseUrl}forecast/3hourly/geosearch?key=${this.key}&postal_code=10001&country=PE&lang=es&city=Lima`;
        return this.weatherObserver = this.http.get(requestUrl).map(res => res.json());
    }
}
