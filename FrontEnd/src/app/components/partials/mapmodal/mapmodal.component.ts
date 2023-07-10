import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-mapmodal',
  templateUrl: './mapmodal.component.html',
  styleUrls: ['./mapmodal.component.scss'],
})
export class MapmodalComponent {
  @Input() 'Index': any;
  @Input() 'visibility': any = false;
  @Output() buttonHide = new EventEmitter<void>();
  @Output() buttonShow = new EventEmitter<void>();
  @Output() disableBlock = new EventEmitter<void>();
  iconIndex: any;
  isHidden = false;
  blockNumber: any;
  userId;

  constructor(private locationService: LocationService) {
    this.userId = localStorage.getItem('UserId');
  }

  IconsSelect = [
    'Butter.png',
    'Cheese.png',
    'DarkChoc.png',
    'Pipe.png',
    'WhiteChock.png',
  ];

  newLocationForm = new FormGroup({
    LocationName: new FormControl('', Validators.required),
  });

  handleClick(event: MouseEvent): void {
    event.stopPropagation();
    this.buttonHide.emit();
  }

  handleClickTwo(): void {
    this.buttonShow.emit();
  }

  selection(event: MouseEvent) {
    this.isHidden = true;
    event.preventDefault();

    const Element = event.target as HTMLElement;

    const siblings = Array.from(
      Element.parentElement!.children
    ) as HTMLElement[];

    siblings.forEach((sibling) => sibling.classList.remove('active'));

    Element.classList.add('active');

    console.log(Element.id);

    let parentElement = Element.parentElement.parentElement.parentElement.id;
    let block = parseInt(parentElement.substring(3));
    console.log(block);

    this.blockNumber = block;

    this.iconIndex = Element.id;
  }

  addLocation() {
    let data = {
      link: this.newLocationForm.controls['LocationName'].value,
      icon: this.IconsSelect[this.iconIndex],
      name: this.newLocationForm.controls['LocationName'].value,
      userId: this.userId,
      index: this.blockNumber,
      items: [],
    };

    console.log(data);

    this.locationService.postNewLocation(data);
    this.disableBlock.emit();
  }
}
