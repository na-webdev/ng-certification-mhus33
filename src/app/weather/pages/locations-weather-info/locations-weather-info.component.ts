import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from '../../services/weather.service';
import { WeatherDataI } from '../../interfaces/weather-data.interface';

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
  }

  addLocationWeather(zipCode: string) {
    this.weatherService.addLocationWeather(zipCode).subscribe();
  }
}
