import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./authService";
import { Team } from "../types/teams/team";
import { baseUrl } from "./serviceConstants";

@Injectable({ providedIn: 'root' })
export class TeamsService {
    constructor(private http: HttpClient, private authService: AuthService) { } 
         createTeam(sportId: string, team: Team): Observable<Team> {
            const payload = JSON.stringify(team);
            return this.http.post<Team>(`${baseUrl}/sports/${sportId}/teams`, payload, this.authService.getRequestHeaders());
        }

        updateTeam(sportId: string, team: Team): Observable<Team> {
            const payload = JSON.stringify(team);
            return this.http.put<Team>(`${baseUrl}/sports/${sportId}/teams/${team.id}`, payload, this.authService.getRequestHeaders());
        }

        getTeams(sportId: string): Observable<Team[]> {
            return this.http.get<Team[]>(`${baseUrl}/sports/${sportId}/teams`, this.authService.getRequestHeaders());
        }

        getTeam(sportId: string, teamId: string): Observable<Team> {
            return this.http.get<Team>(`${baseUrl}/sports/${sportId}/teams/${teamId}`, this.authService.getRequestHeaders());
        }
}