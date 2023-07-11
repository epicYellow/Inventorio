import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginCheckService {
  constructor() {}

  isLoggedIn(): boolean {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    return isLoggedIn;
  }
}
