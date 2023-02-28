import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsWeatherInfoComponent } from './pages';
import { LocationForecastComponent } from './pages';

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
