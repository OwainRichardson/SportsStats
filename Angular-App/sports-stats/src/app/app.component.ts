import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [ AdminComponent, CommonModule, HomeComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  router: Router;
  isAdmin = false;

  constructor(router: Router) {
    this.router = router;

    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.isAdmin = e.url === '/admin';
      }
    });
  }

  title = 'Sports Stats';
}
