import { Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AllitemService } from 'src/app/services/allitem.service';
import { LocationService } from 'src/app/services/location.service';
import { AllItens } from 'src/app/shared/models/AllItems';
import { Location } from 'src/app/shared/models/location';

@Component({
  selector: 'app-add-items-modal',
  templateUrl: './add-items-modal.component.html',
  styleUrls: ['./add-items-modal.component.scss'],
})
export class AddItemsModalComponent {
  allItems!: AllItens[];
  locations!: Location[];

  @Input() 'visibility': any;
  @Output() buttonHide = new EventEmitter<void>();
  @Output() buttonShow = new EventEmitter<void>();

  constructor(
    allitemService: AllitemService,
    activatedRoute: ActivatedRoute,
    private locationService: LocationService,

    private fb: FormBuilder
  ) {
    let AlItemsObservable: Observable<AllItens[]>;
    let locationsObservable: Observable<Location[]>;

    activatedRoute.params.subscribe((params) => {
      AlItemsObservable = allitemService.getAll();
    });

    activatedRoute.params.subscribe((params) => {
      locationsObservable = locationService.getAll();
    });

    AlItemsObservable.subscribe((serverLocations) => {
      this.allItems = serverLocations;
    });

    locationsObservable.subscribe((serverLocations) => {
      this.locations = serverLocations;
    });
  }

  form: FormGroup;
  dropdowns: FormArray;

  ngOnInit() {
    this.form = this.fb.group({
      dropdowns: this.fb.array([this.fb.control('', Validators.required)]),
      locationName: this.fb.control('', Validators.required),
    });

    this.dropdowns = this.form.get('dropdowns') as FormArray;
  }

  get locationName() {
    return this.form.get('locationName');
  }

  onDropdownChange(index: number) {
    const selectedValue = this.dropdowns.at(index).value;
    if (selectedValue) {
      if (index === this.dropdowns.length - 1) {
        this.dropdowns.push(this.fb.control(''));
      }
    } else {
      for (let i = index + 1; i < this.dropdowns.length; i++) {
        this.dropdowns.removeAt(i);
      }
    }
  }

  formSubmit() {
    console.log(this.form.controls['locationName'].value);

    let array = [];
    console.log(this.form.controls['dropdowns'].value);
    for (let i = 0; i < this.allItems.length; i++) {
      for (let j = 0; j < this.form.controls['dropdowns'].value.length; j++) {
        if (
          this.allItems[i].ItemName === this.form.controls['dropdowns'].value[j]
        ) {
          let payload = {
            ItemName: this.allItems[i].ItemName,
            lvlRecipe: this.allItems[i].lvlRecipe,
            Icon: this.allItems[i].Icon,
            Qta: 1,
            Location: this.form.controls['locationName'].value,
            userId: 1,
          };
          array.push(payload);

          break;
        }
      }
    }

    this.locationService.addNewItem(
      array,
      this.form.controls['locationName'].value
    );
  }

  handleClick(): void {
    this.buttonHide.emit();
  }

  handleClickTwo(): void {
    this.buttonShow.emit();
  }
}
