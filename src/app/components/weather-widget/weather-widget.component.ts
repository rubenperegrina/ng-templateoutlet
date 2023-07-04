import { Component, Injector, Input, TemplateRef, inject } from '@angular/core';
import { WeatherActionsService } from 'src/app/services/weather-actions.service';
import { WeatherStateService } from 'src/app/services/weather-state.service';

@Component({
  selector: 'weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent {
  @Input()
  headerTemplate!: TemplateRef<any>;

  @Input()
  actionTemplate!: TemplateRef<any>;

  @Input()
  contentTemplate!: TemplateRef<{ $implicit: WeatherStateService }>;

  state = inject(WeatherStateService);
  actions = inject(WeatherActionsService);
  injector = inject(Injector);
}
