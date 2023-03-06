import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { WeatherService } from '../services';
import { CityForecastI } from '../interfaces/forecast-data.interface';

@Injectable({
  providedIn: 'root',
})
export class LocationForecastResolver implements Resolve<CityForecastI> {
  constructor(private readonly weatherService: WeatherService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<CityForecastI> {
    const zipCode = route.params.zipcode;
    return this.weatherService.getLocationForecast(zipCode);
  }
}
