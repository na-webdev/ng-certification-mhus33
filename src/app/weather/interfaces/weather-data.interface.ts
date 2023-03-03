export interface WeatherI {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface TemperatureI {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
}

export interface WeatherDataI {
  weather: WeatherI[];
  main: TemperatureI;
  id: number;
  name: string;
  zipCode: string;
}
