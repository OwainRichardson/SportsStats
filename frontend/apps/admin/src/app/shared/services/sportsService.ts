import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Sport } from "../types/sports/sport";
import { Observable } from "rxjs";
import { AuthService } from "./authService";
import { baseUrl } from "./serviceConstants";

@Injectable({ providedIn: 'root' })
export class SportsService {
    constructor(private http: HttpClient, private authService: AuthService) { }

    getSports(): Observable<Sport[]> {
        return this.http.get<Sport[]>(`${baseUrl}/sports`, this.authService.getRequestHeaders());
    }

    getSport(sportId: string): Observable<Sport> {
        return this.http.get<Sport>(`${baseUrl}/sports/${sportId}`, this.authService.getRequestHeaders());
    }

    createSport(name: string, icon: string): Observable<Sport> {
        return this.http.post<Sport>(`${baseUrl}/sports`, {name, icon}, this.authService.getRequestHeaders());
    }
}