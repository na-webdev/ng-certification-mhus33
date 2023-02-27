import { Component, OnInit } from '@angular/core';
import { WeatherService } from '@weather/services/weather.service';
import { Observable } from 'rxjs';
import { WeatherDataI } from '@weather/interfaces/weather-data.interface';

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
