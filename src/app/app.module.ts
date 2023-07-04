import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { WeatherCustomActionComponent } from './components/weather-custom-action/weather-custom-action.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    WeatherCustomActionComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
