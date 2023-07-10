import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crafting-item',
  templateUrl: './crafting-item.component.html',
  styleUrls: ['./crafting-item.component.scss'],
})
export class CraftingItemComponent {
  @Input() 'Grayed': string;
  @Input() 'Name': string;
  @Input() 'Level';
  @Input() 'Req';
}
