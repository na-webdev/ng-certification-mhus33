import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WeatherModule } from './weather';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, WeatherModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
