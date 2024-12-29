import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [ CommonModule, RouterOutlet, RouterLink, RouterLinkActive ],
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
        this.isAdmin = e.url.includes('/admin');
      }
    });
  }

  title = 'Sports Stats';
}
