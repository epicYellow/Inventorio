import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavBarService } from 'src/app/services/nav-bar.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  showNavBar = true;
  subscription: Subscription;
  hideNavbarLinks = '/login';
  userId;
  LogInText = 'LogIn';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public nav: NavBarService
  ) {
    this.userId = localStorage.getItem('UserId');

    if (
      this.userId === undefined ||
      this.userId === '' ||
      this.userId === null
    ) {
    } else {
      this.LogInText = 'LogOut';
      console.log('logged in');
    }
  }

  showNav(): boolean {
    return !this.hideNavbarLinks.includes(this.router.url);
  }

  logOutIN() {
    console.log(localStorage.getItem('UserId'));

    if (
      this.userId === undefined ||
      this.userId === '' ||
      this.userId === null
    ) {
      this.router.navigateByUrl('/login');
    } else {
      localStorage.clear();
    }
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      console.log(params);

      const page = params['page'];
      if (page === 'login') {
        this.showNavBar = false;
      } else {
        this.showNavBar = true;
      }
    });
  }
}
