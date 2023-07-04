import { Injectable, inject } from '@angular/core';
import { WeatherStateService } from './weather-state.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherActionsService {

  state: any = inject(WeatherStateService);

  reload() {
    this.state.lastUpdateAt = new Date();
    console.log('Reloads widget data...');
  }
  copyData() {
    console.log('Copy widget data into clipboard...');
  }
}
