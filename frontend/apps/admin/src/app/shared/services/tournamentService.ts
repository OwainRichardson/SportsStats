import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./authService";
import { Tournament } from "../types/tournaments/tournament";

@Injectable({ providedIn: 'root' })
export class TournamentService {
    constructor(private http: HttpClient, private authService: AuthService) { } 
        getFutureTournaments(sportId: string): Observable<Tournament[]> {
            return this.http.get<Tournament[]>(`http://localhost:5253/sports/${sportId}/tournaments/future`, this.authService.getRequestHeaders());
        }

        getPastTournaments(sportId: string): Observable<Tournament[]> {
            return this.http.get<Tournament[]>(`http://localhost:5253/sports/${sportId}/tournaments/past`, this.authService.getRequestHeaders());
        }

         createTournament(sportId: string, tournament: Tournament): Observable<Tournament> {
            const payload = JSON.stringify(tournament);
            return this.http.post<Tournament>(`http://localhost:5253/sports/${sportId}/tournaments`, payload, this.authService.getRequestHeaders());
        }

        getTournament(sportId: string, tournamentId: string): Observable<Tournament> {
            return this.http.get<Tournament>(`http://localhost:5253/sports/${sportId}/tournaments/${tournamentId}`, this.authService.getRequestHeaders());
        }
}