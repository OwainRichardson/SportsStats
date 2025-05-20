import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { UserDetails } from './shared/types/users/userDetails';
import { UserService } from './shared/services/userService';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { AuthService } from './shared/services/authService';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AuthService]
})
export class AppComponent implements OnInit {
  title = 'admin';
  userDetails: UserDetails | undefined;
  isAuthenticated = false;

  constructor(private authService: AuthService, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.router.events
    .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
    .subscribe(() => {
      if (this.authService.isAuthenticated()) {
        this.isAuthenticated = true;
        this.userService.getUserDetails().subscribe(userDetails => this.userDetails = userDetails);
      } else {
        this.isAuthenticated = false;
      }
    })
  }

  logout() {
    this.authService.logout();
  }
}
