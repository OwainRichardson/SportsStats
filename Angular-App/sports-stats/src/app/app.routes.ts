import { Routes } from '@angular/router';
import { SportsComponent } from './pages/sports/sports.component';
import { SportComponent } from './pages/sport/sport.component';

export const routes: Routes = [
    { path: 'sports', component: SportsComponent, title: 'Home' },
    { path: 'sports/:sportId', component: SportComponent, title: 'Sport' },
    { path: '**', component: SportsComponent, title: 'Home' },
];
