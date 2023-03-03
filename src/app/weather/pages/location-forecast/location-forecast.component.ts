import { Component, OnInit } from '@angular/core';
import {
  CityForecastI,
  ForecastI,
} from '../../interfaces/forecast-data.interface';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-location-forecast',
  templateUrl: './location-forecast.component.html',
  styleUrls: ['./location-forecast.component.css'],
})
export class LocationForecastComponent implements OnInit {
  cityForecast$: Observable<CityForecastI>;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.cityForecast$ = this.route.data.pipe(
      map((data: { cityForecast: CityForecastI }) => data.cityForecast)
    );
  }

  getWeatherName(forecast: Partial<ForecastI>, lowercase = true) {
    let result = forecast.weather[0].main;
    if (result.toLowerCase() === 'clear') result = 'sun';
    if (lowercase) result = result.toLowerCase();
    return result;
  }
}
