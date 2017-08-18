export class CurrentWeather implements MyApp.Models.ICurrentWeather {
    cityName: string;
    date: string;
    weather: object;
    temp: number;

    constructor(obj: object) {
        this.cityName = obj['city_name'];
        this.temp = obj['temp'];
        this.weather = obj['weather'];
        this.date = obj['datetime'];
    }
}
