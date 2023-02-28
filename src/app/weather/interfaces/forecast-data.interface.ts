export interface City {
  id: number;
  name: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface List {
  dt: number;
  main: Main;
  weather: Weather[];
  dt_txt: string;
}

export interface RootObject {
  city: City;
  list: List[];
}
