import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, of, take, tap } from 'rxjs';
import { WeatherDataI } from '../interfaces';
import { CityForecastI } from '../interfaces/forecast-data.interface';

const baseUrl = environment.weatherApiURL;

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  weathersSubject = new BehaviorSubject<WeatherDataI[]>([]);
  weathers$ = this.weathersSubject.asObservable();
  constructor(private http: HttpClient) {}

  addLocationWeather(zipCode: string) {
    const existingLocation = this.weathersSubject.value.find(
      (weatherData) => weatherData.zipCode === zipCode
    );
    return (
      existingLocation
        ? of(null)
        : this.http.get<any>(`${baseUrl}weather?zip=${zipCode}`)
    ).pipe(
      take(1),
      filter((res) => !!res),
      map((response): WeatherDataI => {
        const { weather, main, name, id } = response;
        return {
          weather,
          main,
          name,
          id,
          zipCode,
        };
      }),
      tap((data) => {
        const weathers = [...this.weathersSubject.value, data];
        this.saveZipCodesToLocalstorage(weathers);

        this.weathersSubject.next(weathers);
      })
    );
  }

  removeLocationWeather(zipCode) {
    const weathers = this.weathersSubject.value.filter(
      (weatherData) => weatherData.zipCode !== zipCode
    );
    this.saveZipCodesToLocalstorage(weathers);
    this.weathersSubject.next(weathers);
  }

  getWeathersFromLocalstorage() {
    const locationZipCodes = JSON.parse(localStorage.getItem('zipCodes'));
    if (locationZipCodes)
      locationZipCodes.forEach((zipCode) =>
        this.addLocationWeather(zipCode).subscribe()
      );
  }

  saveZipCodesToLocalstorage(weathers: WeatherDataI[]) {
    const locationZipCodes = weathers.map((weatherData) => weatherData.zipCode);
    localStorage.setItem('zipCodes', JSON.stringify(locationZipCodes));
  }

  getLocationForecast(zipCode: string) {
    return this.http
      .get<any>(`${baseUrl}forecast/daily?zip=${zipCode}&cnt=5`)
      .pipe(
        take(1),
        map((res): CityForecastI => {
          let { city, list } = res;
          return {
            city,
            list: list.map((data) => ({
              ...data,
              dt: new Date(parseInt(data.dt) * 1000),
            })),
          };
        })
      );
  }
}
