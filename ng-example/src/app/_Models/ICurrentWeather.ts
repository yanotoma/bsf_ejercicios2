

declare module MyApp.Models {
    export interface ICurrentWeather {
        cityName: string;
        date: string;
        weather: object;
        temp: number;
    }
}

