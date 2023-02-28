import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from '../../services';
import { WeatherDataI } from '../../interfaces';

@Component({
  selector: 'app-locations-weather-info',
  templateUrl: './locations-weather-info.component.html',
  styleUrls: ['./locations-weather-info.component.css'],
})
export class LocationsWeatherInfoComponent implements OnInit {
  weathers$: Observable<WeatherDataI[]>;

  constructor(private readonly weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weathers$ = this.weatherService.weathers$;
    this.weatherService.getWeathersFromLocalstorage();
  }

  addLocationWeather(zipCode: string) {
    this.weatherService.addLocationWeather(zipCode).subscribe();
  }

  removeLocationWeather(zipCode: string) {
    this.weatherService.removeLocationWeather(zipCode);
  }

  trackByWeathers(index: number, item: WeatherDataI) {
    return item.zipCode;
  }
}
