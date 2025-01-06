import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Metric } from "../types/admin/metric";

@Injectable({
    providedIn: 'root',
  })
  export class MetricsService {
    constructor(private httpClient: HttpClient) {
      
    }

    getMetrics(sportId: string): Observable<Metric[]> {
      return this.httpClient.get<Metric[]>(`http://localhost:5253/sports/${sportId}/metrics`);
    }
  }