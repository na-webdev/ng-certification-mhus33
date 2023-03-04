import { WeatherImageUrlPipe } from './weather-image-url.pipe';

describe('WeatherImageUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new WeatherImageUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
