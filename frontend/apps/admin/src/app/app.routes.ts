import { Route } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { SportsComponent } from './routes/sports/sports.component';
import { SportComponent } from './routes/sports/sport/sport.component';
import { LoginComponent } from './routes/account/login/login.component';
import { CreateAccountComponent } from './routes/account/create/create-account.component';
import { AuthGuard } from './shared/services/authGuard';
import { SportSettingsComponent } from './routes/sports/sport/settings/sport-settings.component';
import { SportsCreateComponent } from './routes/sports/create/sports-create.component';

export const appRoutes: Route[] = [
    { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'sports', component: SportsComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'sports/create', component: SportsCreateComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'sports/:sportId', component: SportComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'sports/:sportId/settings', component: SportSettingsComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'account/login', component: LoginComponent, pathMatch: 'full' },
    { path: 'account/create-account', component: CreateAccountComponent, pathMatch: 'full' },
];
