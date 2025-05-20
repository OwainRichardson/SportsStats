import { Route } from '@angular/router';
import { LoginComponent } from './routes/account/login/login.component';
import { AuthGuard } from '@common/services/authGuard';
import { SportsComponent } from './routes/sports/sports.component';
import { SportComponent } from './routes/sports/sport/sport.component';

export const appRoutes: Route[] = [
    { path: '', component: SportsComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'sports/:sportId', component: SportComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'account/login', component: LoginComponent, pathMatch: 'full' },
];
