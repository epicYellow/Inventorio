import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  loginStatusChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  loginValidation: EventEmitter<string> = new EventEmitter<string>();
  constructor(private http: HttpClient, private router: Router) {}

  isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  Login(item: any, pageUrl: string): void {
    this.http.post('http://localhost:5001/api/users/login', item).subscribe(
      (response) => {
        console.log('jy sal nie glo nie: ' + response['valid']);

        if (response['valid']) {
          localStorage.setItem(
            'UserId',
            JSON.stringify(response['userData']._id)
          );
          this.loginStatusChanged.emit(true);
          this.router.navigateByUrl(pageUrl);
          this.isLoggedInSubject.next(true);
          localStorage.setItem('isLoggedIn', 'true');
        } else {
          this.loginValidation.emit('Wrong details');
        }
      },
      (error) => {
        this.loginValidation.emit('HTTP error: ' + error);
      }
    );
  }

  Logout(): void {
    localStorage.removeItem('UserId');
    localStorage.setItem('isLoggedIn', 'false');
    this.loginStatusChanged.emit(false);
    this.isLoggedInSubject.next(false);
  }
}
