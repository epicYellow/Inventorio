import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllItens } from '../shared/models/AllItems';

@Injectable({
  providedIn: 'root',
})
export class AllitemService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<AllItens[]> {
    return this.http.get<AllItens[]>('http://localhost:5001/api/allItems');
  }
}
