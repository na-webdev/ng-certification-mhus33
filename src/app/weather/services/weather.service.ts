import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, tap } from 'rxjs';
import { WeatherDataI } from '../interfaces/weather-data.interface';

const baseUrl = environment.weatherApiURL;

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  weathersSubject = new BehaviorSubject<WeatherDataI[]>([]);
  weathers$ = this.weathersSubject.asObservable();
  constructor(private http: HttpClient) {}

  addLocationWeather(zipCode: string) {
    return this.http.get<any>(`${baseUrl}?zip=${zipCode}`).pipe(
      map((response): WeatherDataI => {
        const { weather, main, sys, name, wind, id } = response;
        return {
          weather,
          main,
          sys,
          name,
          wind,
          id,
        };
      }),
      tap((data) => {
        const weathers = [...this.weathersSubject.value, data];
        console.log(weathers);
        this.weathersSubject.next(weathers);
      })
    );
  }

  getWeathersFromLocalstorage() {
    const weathers = JSON.parse(localStorage.getItem('weathers'));
    this.weathersSubject.next(weathers);
  }
}
