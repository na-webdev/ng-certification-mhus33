import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsWeatherInfoComponent } from './pages';
import { LocationForecastComponent } from './pages';
import { LocationForecastResolver } from './resolvers/location-forecast.resolver';

const routes: Routes = [
  {
    path: '',
    component: LocationsWeatherInfoComponent,
  },
  {
    path: 'forecast/:zipcode',
    component: LocationForecastComponent,
    resolve: {
      cityForecast: LocationForecastResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LocationForecastResolver],
})
export class WeatherRoutingModule {}
