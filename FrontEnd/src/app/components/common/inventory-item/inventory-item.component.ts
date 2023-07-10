import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.scss'],
})
export class InventoryItemComponent {
  @Input() 'Name';
  @Input() 'Icon';
  @Input() 'Level';
  @Input() 'Qta';
  @Input() 'Location';
}
