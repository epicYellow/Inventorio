import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LocationService } from 'src/app/services/location.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';
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
  locationFilter: any = 'all';
  userId;

  divVisibility = false;

  showDiv(): void {
    this.divVisibility = true;
  }

  hideDiv(): void {
    this.divVisibility = false;
  }
  locationsObservable: Observable<Location[]>;

  constructor(
    private locationService: LocationService,
    activatedRoute: ActivatedRoute,
    private sharedService: SharedServiceService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.userId = localStorage.getItem('UserId');

    activatedRoute.params.subscribe((params) => {
      this.locationsObservable = locationService.getAll();
      this.searchTerm = params['searchTerm'];
    });

    this.locationsObservable.subscribe((serverLocations) => {
      this.locations = serverLocations.filter(
        (item) => item.userId === this.userId
      );

      const itemCounts = this.locations.map((obj) => obj.items.length);
      const sum = itemCounts.reduce((acc, val) => acc + val, 0);

      this.itemsCount = sum;
    });
  }

  ngOnInit(): void {
    this.sharedService.itemAdded.subscribe(() => {
      this.refreshData();
    });
  }

  refreshData() {
    console.log('this is running');

    this.locationsObservable = this.locationService.getAll();

    this.locationsObservable.subscribe((serverLocations) => {
      this.locations = serverLocations.filter(
        (item) => item.userId === this.userId
      );

      this.changeDetectorRef.detectChanges();
    });
  }
}
