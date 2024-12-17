import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SportComponent } from './sport/sport.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: 'Home' },
    { path: 'sports/:sportId', component: SportComponent, title: 'Sport' },
];
