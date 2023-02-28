import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services';

@Component({
  selector: 'app-location-forecast',
  templateUrl: './location-forecast.component.html',
  styleUrls: ['./location-forecast.component.css'],
})
export class LocationForecastComponent implements OnInit {
  constructor(private readonly weatherService: WeatherService) {}

  ngOnInit(): void {
    // this.weatherService.getLocationForecast('95472').subscribe(console.log);
  }
}
