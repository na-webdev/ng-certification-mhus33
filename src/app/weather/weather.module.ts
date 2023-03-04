import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLocationFormComponent } from './components';
import { WeatherCardComponent } from './components';
import { FormsModule } from '@angular/forms';
import { LocationForecastComponent } from './pages';
import { LocationsWeatherInfoComponent } from './pages';
import { WeatherCardListComponent } from './components';
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
    WeatherCardListComponent,
    WeatherImageUrlPipe,
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
