import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  itemAdded: EventEmitter<void> = new EventEmitter<void>();

  emitItemAdded(): void {
    this.itemAdded.emit();
  }
}
