import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLocationFormComponent } from './components/add-location-form/add-location-form.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { FormsModule } from '@angular/forms';
import { LocationForecastComponent } from './pages/location-forecast/location-forecast.component';
import { LocationsWeatherInfoComponent } from './pages/locations-weather-info/locations-weather-info.component';
import { WeatherCardListComponent } from './components/weather-card-list/weather-card-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherApiInterceptor } from './interceptors/weather-api.interceptor';

@NgModule({
  declarations: [
    AddLocationFormComponent,
    WeatherCardComponent,
    LocationForecastComponent,
    LocationsWeatherInfoComponent,
    WeatherCardListComponent,
  ],
  imports: [CommonModule, FormsModule, WeatherRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WeatherApiInterceptor,
      multi: true,
    },
  ],
})
export class WeatherModule {}
