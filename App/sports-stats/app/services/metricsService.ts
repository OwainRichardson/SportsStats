import { IMetricResponse } from "../types/response/IMetricResponse";

export async function getMetrics(sportId: string): Promise<IMetricResponse[]> {
    const response = await fetch(`http://localhost:5253/sports/${sportId}/metrics`);

    if (response.status == 200) {
        let metrics: Array<IMetricResponse> = await response.json();
        return metrics;
    }

    return [];
}