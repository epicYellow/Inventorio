import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location-item',
  templateUrl: './location-item.component.html',
  styleUrls: ['./location-item.component.scss'],
})
export class LocationItemComponent {
  @Input() 'LocationName': string;
  @Input() 'Route': string;
  @Input() 'LocationIcon': string;
}
