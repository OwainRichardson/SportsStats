import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./authService";
import { Team } from "../types/teams/team";

@Injectable({ providedIn: 'root' })
export class TeamsService {
    constructor(private http: HttpClient, private authService: AuthService) { } 
         createTeam(sportId: string, team: Team): Observable<Team> {
            const payload = JSON.stringify(team);
            return this.http.post<Team>(`http://localhost:5253/sports/${sportId}/teams`, payload, this.authService.getRequestHeaders());
        }

        getTeams(sportId: string): Observable<Team[]> {
            return this.http.get<Team[]>(`http://localhost:5253/sports/${sportId}/teams`, this.authService.getRequestHeaders());
        }
}