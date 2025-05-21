import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '@common/services/authService';
import { UserService } from '@common/services/userService';
import { UserDetails } from '@common/types/users/userDetails';
import { filter } from 'rxjs';

@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  title = 'sports-stats';
  isAuthenticated = false;
  userDetails: UserDetails | undefined;

  constructor(private router: Router, private userService: UserService, private authService: AuthService) {}

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
