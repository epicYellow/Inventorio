import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavBarService } from 'src/app/services/nav-bar.service';
import { UserService } from 'src/app/services/user.service';

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
  LogInText: string;

  constructor(
    private router: Router,
    public nav: NavBarService,
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const checkLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    console.log('EK VERSTAAN NIE:' + checkLoggedIn);

    if (checkLoggedIn) {
      this.LogInText = checkLoggedIn ? 'LogOut' : 'LogIn';
    } else {
      this.userService.isLoggedIn$.subscribe((isLoggedIn) => {
        console.log(isLoggedIn);

        this.LogInText = isLoggedIn ? 'LogOut' : 'LogIn';
        this.cdr.detectChanges();
      });
    }
  }

  logOutIN() {
    if (this.LogInText === 'LogIn') {
      this.router.navigateByUrl('/login');
    } else if (this.LogInText === 'LogOut') {
      this.userService.Logout();
    }
  }
}
