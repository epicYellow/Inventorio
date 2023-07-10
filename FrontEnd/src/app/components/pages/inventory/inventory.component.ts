import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LocationService } from 'src/app/services/location.service';
import { Location } from 'src/app/shared/models/location';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent {
  counter(i: number) {
    return new Array(i);
  }

  locations!: Location[];
  items: any;
  itemsCount: any;
  searchTerm: any;
  userId;

  divVisibility = false;

  showDiv(): void {
    this.divVisibility = true;
  }

  hideDiv(): void {
    this.divVisibility = false;
  }

  constructor(
    private locationService: LocationService,
    activatedRoute: ActivatedRoute
  ) {
    let locationsObservable: Observable<Location[]>;
    this.userId = localStorage.getItem('UserId');

    activatedRoute.params.subscribe((params) => {
      // if (params['searchTerm']) {
      //   locationsObservable = this.locationService.getAllItemsBySearch(
      //     params['searchTerm']
      //   );
      //   locationsObservable.subscribe((items) => {
      //     this.locations = items;
      //   });
      // }
      locationsObservable = locationService.getAll();
      this.searchTerm = params['searchTerm'];
    });
    locationsObservable.subscribe((serverLocations) => {
      this.locations = serverLocations.filter(
        (item) => item.userId === this.userId
      );

      const itemCounts = this.locations.map((obj) => obj.items.length);
      const sum = itemCounts.reduce((acc, val) => acc + val, 0);

      this.itemsCount = sum;
    });
  }
}
