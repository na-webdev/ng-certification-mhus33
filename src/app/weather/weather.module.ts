import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLocationFormComponent } from './components';
import { WeatherCardComponent } from './components';
import { LocationForecastComponent } from './pages';
import { LocationsWeatherInfoComponent } from './pages';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherApiInterceptor } from './interceptors';
import { WeatherImageUrlPipe } from './pipes/weather-image-url.pipe';

@NgModule({
  declarations: [
    AddLocationFormComponent,
    WeatherCardComponent,
    LocationForecastComponent,
    LocationsWeatherInfoComponent,
    WeatherImageUrlPipe,
  ],
  imports: [CommonModule, WeatherRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WeatherApiInterceptor,
      multi: true,
    },
  ],
})
export class WeatherModule {}
