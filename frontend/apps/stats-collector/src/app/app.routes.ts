import { Route } from '@angular/router';
import { LoginComponent } from './routes/account/login/login.component';
import { AuthGuard } from '@common/services/authGuard';
import { SportsComponent } from './routes/sports/sports.component';
import { SportComponent } from './routes/sports/sport/sport.component';
import { TournamentComponent } from './routes/sports/sport/tournament/tournament.component';
import { MatchComponent } from './routes/sports/sport/tournament/match/match.component';

export const appRoutes: Route[] = [
    { path: '', component: SportsComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'sports/:sportId', component: SportComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'sports/:sportId/tournaments/:tournamentId', component: TournamentComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'sports/:sportId/tournaments/:tournamentId/match/:matchId', component: MatchComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'account/login', component: LoginComponent, pathMatch: 'full' },
];
