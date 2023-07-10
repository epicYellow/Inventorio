import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crafting-req',
  templateUrl: './crafting-req.component.html',
  styleUrls: ['./crafting-req.component.scss'],
})
export class CraftingReqComponent {
  @Input() 'Icon';
  @Input() 'Qta';
}
