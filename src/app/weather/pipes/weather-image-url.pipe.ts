import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherImageUrl',
})
export class WeatherImageUrlPipe implements PipeTransform {
  transform(value: string): string {
    value = value.toLowerCase();
    const options = ['clouds', 'rain', 'snow', 'sun'];
    if (options.includes(value))
      return `https://www.angulartraining.com/images/weather/${value}.png`;
    return 'https://cdn-icons-png.flaticon.com/512/3222/3222800.png';
  }
}
