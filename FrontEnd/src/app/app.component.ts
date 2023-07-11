import { Component } from '@angular/core';
import { LoginCheckService } from './services/login-check.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Inventorio';

  constructor(
    private loginCheckService: LoginCheckService,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.navigateBasedOnLoginStatus(event.url);
      }
    });
  }

  navigateBasedOnLoginStatus(url: string) {
    if (!this.loginCheckService.isLoggedIn()) {
      this.router.navigateByUrl('/login');
    }
  }
}
