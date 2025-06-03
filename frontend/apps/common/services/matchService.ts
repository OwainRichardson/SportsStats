import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./authService";
import { Match } from "../types/tournaments/match";
import { baseUrl } from "../services/serviceConstants";
import { MatchEvent } from "../types/tournaments/matchEvent";

@Injectable({ providedIn: 'root' })
export class MatchService {
    constructor(private http: HttpClient, private authService: AuthService) { } 
    getMatches(sportId: string, tournamentId: string): Observable<Match[]> {
        return this.http.get<Match[]>(`${baseUrl}/sports/${sportId}/tournaments/${tournamentId}/matches`, this.authService.getRequestHeaders());
    }

    getMatch(sportId: string, tournamentId: string, matchId: string): Observable<Match> {
        return this.http.get<Match>(`${baseUrl}/sports/${sportId}/tournaments/${tournamentId}/matches/${matchId}`, this.authService.getRequestHeaders());
    }

    createMatch(sportId: string, tournamentId: string, match: Match): Observable<Match> {
        const payload = JSON.stringify(match);
        return this.http.post<Match>(`${baseUrl}/sports/${sportId}/tournaments/${tournamentId}/matches`, payload, this.authService.getRequestHeaders());
    }

    completeMatch(sportId: string, tournamentId: string, matchId: string): Observable<Match> {
        return this.http.put<Match>(`${baseUrl}/sports/${sportId}/tournaments/${tournamentId}/matches/${matchId}/complete`, this.authService.getRequestHeaders());
    }

    addMatchEvent(sportId: string, tournamentId: string, matchId: string, matchEvent: MatchEvent): Observable<Match> {
        const payload = JSON.stringify(matchEvent);
        return this.http.post<Match>(`${baseUrl}/sports/${sportId}/tournaments/${tournamentId}/matches/${matchId}/events`, payload, this.authService.getRequestHeaders());
    }
}