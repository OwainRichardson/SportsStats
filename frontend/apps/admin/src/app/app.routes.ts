import { Route } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { SportsComponent } from './routes/sports/sports.component';

export const appRoutes: Route[] = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'sports', component: SportsComponent, pathMatch: 'full' },
];
