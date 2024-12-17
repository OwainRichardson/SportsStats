import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Sport } from "../types/sports/sport";

@Injectable({
    providedIn: 'root',
  })
  export class SportsService {
    constructor(private httpClient: HttpClient) {
      
    }

    getSports(): Observable<Sport[]> {
      return this.httpClient.get<Sport[]>('http://localhost:5253/sports');
    }

    getSportById(id: string): Observable<Sport> {
      return this.httpClient.get<Sport>(`http://localhost:5253/sports/${id}`);
    }
  }