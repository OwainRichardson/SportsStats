import { Routes } from '@angular/router';
import { SportsComponent } from './pages/main/sports/sports.component';
import { SportComponent } from './pages/main/sport/sport.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { AdminSportsComponent } from './pages/admin/admin-sports/admin-sports.component';
import { AdminSportComponent } from './pages/admin/admin-sport/admin-sport.component';

export const routes: Routes = [
    { path: '', component: SportsComponent, title: 'Home', data: { area: 'main'}, pathMatch: 'full' },
    { path: 'sports', component: SportsComponent, title: 'Home', data: { area: 'main'} },
    { path: 'sports/:sportId', component: SportComponent, title: 'Sport', data: { area: 'main'}  },
    { path: 'admin', component: AdminHomeComponent, title: 'Admin', data: { area: 'admin'}  },
    { path: 'admin/sports', component: AdminSportsComponent, title: 'Sports Admin', data: { area: 'admin'}  },
    { path: 'admin/sports/:sportId/settings', component: AdminSportComponent, title: 'Sports Admin', data: { area: 'admin'}  },
    { path: '**', component: SportsComponent, title: 'Home', data: { area: 'main'}  },
]; 
