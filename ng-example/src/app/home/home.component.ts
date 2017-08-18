
import { Component, OnInit } from '@angular/core';
import { WeatherService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

  currentWeather: MyApp.Models.ICurrentWeather; // TODO: Create model for Weather
  forecast: Array<any>;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {

    this.weatherService.getWeather().subscribe( res => {
      console.log(res);
      this.currentWeather = res;
    });

    this.weatherService.getForecast().subscribe( res => {
      console.log('getForecast', res);
      this.forecast = res.data.filter( item => item.datetime.split(':')[1] === '15');
      this.forecast.map( item => {
        item.city_name = res.city_name;
      } );
    });

  }

}
