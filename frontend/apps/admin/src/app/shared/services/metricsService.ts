import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../../../../../common/services/authService";
import { SportMetric } from "../../shared/types/sports/sport-metric";
import { baseUrl } from "./serviceConstants";

@Injectable({ providedIn: 'root' })
export class MetricsService {
    constructor(private http: HttpClient, private authService: AuthService) { }

    getSportMetrics(sportId: string): Observable<SportMetric[]> {
        return this.http.get<SportMetric[]>(`${baseUrl}/sports/${sportId}/metrics`, this.authService.getRequestHeaders());
    }
    
    updateMetric(metric: SportMetric, sportId: string): Observable<SportMetric> {
        const payload = JSON.stringify(metric);
        return this.http.put<SportMetric>(`${baseUrl}/sports/${sportId}/metrics/${metric.id}`, payload, this.authService.getRequestHeaders());
    }
    
    createMetric(metric: SportMetric, sportId: string): Observable<SportMetric> {
        const payload = JSON.stringify(metric);
        return this.http.post<SportMetric>(`${baseUrl}/sports/${sportId}/metrics`, payload, this.authService.getRequestHeaders());
    }
    
    deleteMetric(metricId: string, sportId: string): Observable<SportMetric> {
        return this.http.delete<SportMetric>(`${baseUrl}/sports/${sportId}/metrics/${metricId}`, this.authService.getRequestHeaders());
    }
}