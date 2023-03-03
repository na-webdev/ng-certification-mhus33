import { WeatherI } from './weather-data.interface';

export interface City {
  id: number;
  name: string;
}

export interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface ForecastI {
  dt: number;
  temp: Temp;
  weather: WeatherI[];
}

export interface CityForecastI {
  city: City;
  list: ForecastI[];
}
