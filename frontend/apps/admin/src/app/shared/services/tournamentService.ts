import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./authService";
import { Tournament } from "../types/tournaments/tournament";
import { baseUrl } from "./serviceConstants";

@Injectable({ providedIn: 'root' })
export class TournamentService {
    constructor(private http: HttpClient, private authService: AuthService) { } 
        getFutureTournaments(sportId: string): Observable<Tournament[]> {
            return this.http.get<Tournament[]>(`${baseUrl}/sports/${sportId}/tournaments/future`, this.authService.getRequestHeaders());
        }

        getPastTournaments(sportId: string): Observable<Tournament[]> {
            return this.http.get<Tournament[]>(`${baseUrl}/sports/${sportId}/tournaments/past`, this.authService.getRequestHeaders());
        }

         createTournament(sportId: string, tournament: Tournament): Observable<Tournament> {
            const payload = JSON.stringify(tournament);
            return this.http.post<Tournament>(`${baseUrl}/sports/${sportId}/tournaments`, payload, this.authService.getRequestHeaders());
        }

        getTournament(sportId: string, tournamentId: string): Observable<Tournament> {
            return this.http.get<Tournament>(`${baseUrl}/sports/${sportId}/tournaments/${tournamentId}`, this.authService.getRequestHeaders());
        }
}