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

export interface WeatherDataI {
  weather: WeatherI[];
  main: MainI;
  id: number;
  name: string;
  zipCode: string;
}
