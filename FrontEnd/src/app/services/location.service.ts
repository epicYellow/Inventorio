import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_locations } from 'src/data';
import { LOCATIONS_URL } from '../shared/constants/urls';
import { Location } from '../shared/models/location';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Location[]> {
    return this.http.get<Location[]>(LOCATIONS_URL);
  }

  // getAllItemsBySearch(searchTerm: string) {
  //   return this.http.get<Location[]>(
  //     'http://localhost:5001/api/locations/search/' + searchTerm
  //   );
  // }

  postNewLocation(item: any) {
    console.log(item);

    return this.http
      .post<Location>('http://localhost:5001/api/locations/newLocation/', item)
      .subscribe(
        (response) => {
          console.log('HTTP response:', response);
        },
        (error) => {
          console.log('HTTP error:', error);
        }
      );
  }

  addNewItem(item: any, name: any) {
    console.log(item);

    return this.http
      .patch<Location>(
        'http://localhost:5001/api/locations/AddItems/' + name,
        item
      )
      .subscribe(
        (response) => {
          console.log('HTTP response:', response);
        },
        (error) => {
          console.log('HTTP error:', error);
        }
      );
  }
}
