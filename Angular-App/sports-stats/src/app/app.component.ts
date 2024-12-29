import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet, RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter, map, mergeMap } from 'rxjs/operators';
import { SportsComponent } from "./pages/sports/sports.component";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, SportsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  router: Router;
  area: string;

  constructor(router: Router, route: ActivatedRoute) {
    this.router = router;

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.area = route.root.firstChild?.snapshot.data['area'];
        console.log(route.root.firstChild?.snapshot.data['area']);
    });
  }

  title = 'Sports Stats';
}
