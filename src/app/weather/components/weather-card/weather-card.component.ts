import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherDataI } from '../../interfaces';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
})
export class WeatherCardComponent {
  @Input() weatherData: WeatherDataI;
  @Output() removeWeather = new EventEmitter<string>();

  remove() {
    this.removeWeather.emit(this.weatherData.zipCode);
  }

  get weatherName() {
    return this.weatherData.weather[0].main;
  }
}
