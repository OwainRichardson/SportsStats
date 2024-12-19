import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Sport } from "../types/sports/sport";
import { Tournament } from "../types/sports/Tournament";

@Injectable({
    providedIn: 'root',
  })
  export class SportsService {
    constructor(private httpClient: HttpClient) {
      
    }

    getSports(): Observable<Sport[]> {
      return this.httpClient.get<Sport[]>('http://localhost:5253/sports');
    }

    getSportById(sportId: string): Observable<Sport> {
      return this.httpClient.get<Sport>(`http://localhost:5253/sports/${sportId}`);
    }

    getTournamentsBySportId(sportId: string): Observable<Tournament[]> {
      return this.httpClient.get<Tournament[]>(`http://localhost:5253/sports/${sportId}/tournaments`);
    }
  }