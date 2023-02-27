import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsWeatherInfoComponent } from './locations-weather-info.component';

describe('WeatherInfoComponent', () => {
  let component: LocationsWeatherInfoComponent;
  let fixture: ComponentFixture<LocationsWeatherInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationsWeatherInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsWeatherInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
