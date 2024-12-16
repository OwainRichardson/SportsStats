import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HeroesComponent } from './heroes/heroes.component';

export const routes: Routes = [
    { path: '', component: HeroesComponent, title: 'Home' },
    { path: 'admin', component: AdminComponent, title: 'Admin' }
];
