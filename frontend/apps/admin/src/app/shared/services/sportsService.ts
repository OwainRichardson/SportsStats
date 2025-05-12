import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Sport } from "../types/sports/sport";
import { Observable } from "rxjs";
import { AuthService } from "./authService";

@Injectable({ providedIn: 'root' })
export class SportsServce {
    constructor(private http: HttpClient, private authService: AuthService) { }

    getSports(): Observable<Sport[]> {
        return this.http.get<Sport[]>('http://localhost:5253/sports', this.authService.getRequestHeaders());
    }

    getSport(sportId: string): Observable<Sport> {
        return this.http.get<Sport>(`http://localhost:5253/sports/${sportId}`, this.authService.getRequestHeaders());
    }
}