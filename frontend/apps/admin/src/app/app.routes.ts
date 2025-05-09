import { Route } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { SportsComponent } from './routes/sports/sports.component';
import { LoginComponent } from './routes/account/login/login.component';
import { CreateAccountComponent } from './routes/account/create/create-account.component';
import { AuthGuard } from './shared/services/authGuard';

export const appRoutes: Route[] = [
    { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'sports', component: SportsComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'account/login', component: LoginComponent, pathMatch: 'full' },
    { path: 'account/create-account', component: CreateAccountComponent, pathMatch: 'full' },
];
