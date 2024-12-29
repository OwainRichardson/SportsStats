import { Routes } from '@angular/router';
import { SportsComponent } from './pages/sports/sports.component';
import { SportComponent } from './pages/sport/sport.component';

export const routes: Routes = [
    { path: 'sports', component: SportsComponent, title: 'Home', data: { area: 'geese'} },
    { path: 'sports/:sportId', component: SportComponent, title: 'Sport', data: { area: 'sport'}  },
    { path: '**', component: SportsComponent, title: 'Home', data: { area: 'main'}  },
]; 
