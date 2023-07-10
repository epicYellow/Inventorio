import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipes } from '../shared/models/Recipes';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Recipes[]> {
    return this.http.get<Recipes[]>('http://localhost:5001/api/recipes');
  }
}
