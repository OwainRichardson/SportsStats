import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./authService";
import { Match } from "../../shared/types/tournaments/match";
import { baseUrl } from "./serviceConstants";

@Injectable({ providedIn: 'root' })
export class MatchService {
    constructor(private http: HttpClient, private authService: AuthService) { } 
        getMatches(sportId: string, tournamentId: string): Observable<Match[]> {
            return this.http.get<Match[]>(`${baseUrl}/sports/${sportId}/tournaments/${tournamentId}/matches`, this.authService.getRequestHeaders());
        }

        createMatch(sportId: string, tournamentId: string, match: Match): Observable<Match> {
            const payload = JSON.stringify(match);
            return this.http.post<Match>(`${baseUrl}/sports/${sportId}/tournaments/${tournamentId}/matches`, payload, this.authService.getRequestHeaders());
        }
}