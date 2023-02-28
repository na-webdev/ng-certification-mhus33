import { TestBed } from '@angular/core/testing';

import { LocationForecastResolver } from './location-forecast.resolver';

describe('LocationForecastResolver', () => {
  let resolver: LocationForecastResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LocationForecastResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
