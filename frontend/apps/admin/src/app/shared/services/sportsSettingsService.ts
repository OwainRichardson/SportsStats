import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SportSetting } from "../../shared/types/sports/sport-setting";
import { Observable } from "rxjs";
import { AuthService } from "./authService";
import { baseUrl } from "./serviceConstants";

@Injectable({ providedIn: 'root' })
export class SportsSettingsService {
    constructor(private http: HttpClient, private authService: AuthService) { }

    getSportSettings(sportId: string): Observable<SportSetting[]> {
        return this.http.get<SportSetting[]>(`${baseUrl}/sports/${sportId}/settings`, this.authService.getRequestHeaders());
    }

    updateSportSetting(value: string, settingId: string, sportId: string): Observable<SportSetting> {
        return this.http.put<SportSetting>(`${baseUrl}/sports/${sportId}/settings/${settingId}`, {value}, this.authService.getRequestHeaders());
    }
}