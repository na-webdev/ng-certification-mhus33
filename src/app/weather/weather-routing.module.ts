import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsWeatherInfoComponent } from './pages/locations-weather-info/locations-weather-info.component';
import { LocationForecastComponent } from './pages/location-forecast/location-forecast.component';

const routes: Routes = [
  {
    path: '',
    component: LocationsWeatherInfoComponent,
  },
  {
    path: 'forecast/:zipcode',
    component: LocationForecastComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class WeatherRoutingModule {}
