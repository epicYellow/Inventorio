import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  Login(item: any, pageUrl) {
    console.log(item);

    return this.http
      .post('http://localhost:5001/api/users/login', item)
      .subscribe(
        (response) => {
          console.log(response);

          if (response['valid']) {
            console.log('works');
            localStorage.setItem(
              'UserId',
              JSON.stringify(response['userData']._id)
            );
            this.router.navigateByUrl(pageUrl);
          } else {
            console.log('Wrong details');
          }
        },
        (error) => {
          console.log('HTTP error:', error);
        }
      );
  }
}
