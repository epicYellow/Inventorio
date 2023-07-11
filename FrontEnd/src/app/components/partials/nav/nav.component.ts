import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavBarService } from 'src/app/services/nav-bar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  showNavBar: boolean;
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
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showNavBar = this.checkIfNavbarShouldBeVisible(event.url);
      }
    });
  }

  checkIfNavbarShouldBeVisible(url: string): boolean {
    if (url === '/login') {
      return false;
    } else {
      return true;
    }
  }

  logOutIN() {
    this.router.navigateByUrl('/login');
    this.userService.Logout();
  }
}
