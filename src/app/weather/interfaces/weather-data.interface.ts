export interface WeatherI {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MainI {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface WindI {
  speed: number;
  deg: number;
}

export interface SysI {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherDataI {
  weather: WeatherI[];
  main: MainI;
  wind: WindI;
  sys: SysI;
  id: number;
  name: string;
}
