import { Route } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { SportsComponent } from './routes/sports/sports.component';
import { SportComponent } from './routes/sports/sport/sport.component';
import { LoginComponent } from './routes/account/login/login.component';
import { CreateAccountComponent } from './routes/account/create/create-account.component';
import { AuthGuard } from './shared/services/authGuard';
import { SportSettingsComponent } from './routes/sports/sport/settings/sport-settings.component';
import { SportTournamentsComponent } from './routes/sports/sport/tournaments/sport-tournaments.component';
import { SportsCreateComponent } from './routes/sports/create/sports-create.component';
import { SportTournamentsCreateComponent } from './routes/sports/sport/tournaments/create/sport-tournaments-create.component';
import { SportTournamentComponent } from './routes/sports/sport/tournaments/tournament/sport-tournament.component';
import { SportTeamsComponent } from './routes/sports/sport/teams/sport-teams.component';
import { SportTeamsCreateComponent } from './routes/sports/sport/teams/create/sport-teams-create.component';
import { SportTeamComponent } from './routes/sports/sport/teams/team/sport-team.component';
import { SportTournamentMatchesCreateComponent } from './routes/sports/sport/tournaments/tournament/matches/create/sport-tournament-matches-create.component';

export const appRoutes: Route[] = [
    { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'sports', component: SportsComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'sports/create', component: SportsCreateComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'sports/:sportId', component: SportComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'sports/:sportId/settings', component: SportSettingsComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'sports/:sportId/tournaments', component: SportTournamentsComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'sports/:sportId/tournaments/create', component: SportTournamentsCreateComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'sports/:sportId/tournaments/:tournamentId', component: SportTournamentComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'sports/:sportId/tournaments/:tournamentId/matches/create', component: SportTournamentMatchesCreateComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'sports/:sportId/teams', component: SportTeamsComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'sports/:sportId/teams/create', component: SportTeamsCreateComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'sports/:sportId/teams/:teamId', component: SportTeamComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'account/login', component: LoginComponent, pathMatch: 'full' },
    { path: 'account/create-account', component: CreateAccountComponent, pathMatch: 'full' },
];
