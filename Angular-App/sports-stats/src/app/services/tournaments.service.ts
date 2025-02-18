import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Sport } from "../types/sports/sport";
import { Tournament } from "../types/sports/tournament";
import { SportSetting } from "../types/sports/sportSetting";

@Injectable({
    providedIn: 'root',
  })
  export class TournamentsService {
    constructor(private httpClient: HttpClient) {
      
    }

    getFutureTournamentsBySportId(sportId: string): Observable<Tournament[]> {
      return this.httpClient.get<Tournament[]>(`http://localhost:5253/sports/${sportId}/tournaments/future`);
    }

    getActiveTournamentsBySportId(sportId: string): Observable<Tournament[]> {
      return this.httpClient.get<Tournament[]>(`http://localhost:5253/sports/${sportId}/tournaments/active`);
    }

    getPastTournamentsBySportId(sportId: string): Observable<Tournament[]> {
      return this.httpClient.get<Tournament[]>(`http://localhost:5253/sports/${sportId}/tournaments/past`);
    }
  }