import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherModule } from '@weather/weather.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, WeatherModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
