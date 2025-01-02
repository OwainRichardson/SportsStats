import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { HomeAreaComponent } from './areas/home-area/home-area.component';
import { AdminAreaComponent } from './areas/admin-area/admin-area.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, HomeAreaComponent, AdminAreaComponent],
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
