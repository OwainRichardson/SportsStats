import { Routes } from '@angular/router';
import { AdminSportsComponent } from './admin-sports/admin-sports.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'admin', component: AdminComponent, title: 'Admin' },
    { path: 'admin/sports', component: AdminSportsComponent, title: 'Admin' },
    { path: 'home', component: HomeComponent, title: 'Home' },
];
