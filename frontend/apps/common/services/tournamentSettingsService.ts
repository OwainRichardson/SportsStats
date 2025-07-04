import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SportSetting } from "../types/sports/sport-setting";
import { Observable } from "rxjs";
import { AuthService } from "./authService";
import { baseUrl } from "./serviceConstants";

@Injectable({ providedIn: 'root' })
export class TournamentSettingsService {
    constructor(private http: HttpClient, private authService: AuthService) { }

    getTournamentSettings(sportId: string, tournamentId: string): Observable<SportSetting[]> {
        return this.http.get<SportSetting[]>(`${baseUrl}/sports/${sportId}/tournaments/${tournamentId}/settings`, this.authService.getRequestHeaders());
    }

    createTournamentSetting(value: string, settingId: string, sportId: string, tournamentId: string): Observable<SportSetting> {
        return this.http.post<SportSetting>(`${baseUrl}/sports/${sportId}/tournaments/${tournamentId}/settings`, {value, sportSettingId: settingId}, this.authService.getRequestHeaders());
    }

    updateTournamentSetting(value: string, settingId: string, sportId: string, tournamentId: string): Observable<SportSetting> {
        return this.http.put<SportSetting>(`${baseUrl}/sports/${sportId}/tournaments/${tournamentId}/settings/${settingId}`, {value}, this.authService.getRequestHeaders());
    }

    deleteTournamentSetting(settingId: string, sportId: string, tournamentId: string): Observable<SportSetting> {
        return this.http.delete<SportSetting>(`${baseUrl}/sports/${sportId}/tournaments/${tournamentId}/settings/${settingId}`, this.authService.getRequestHeaders());
    }
}