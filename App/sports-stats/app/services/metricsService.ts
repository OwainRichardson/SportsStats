import { ICreateMetricInput } from "../types/inputs/ICreateMetricInput";
import { IMetricResponse } from "../types/response/IMetricResponse";

export async function getMetrics(sportId: string): Promise<IMetricResponse[]> {
    const response = await fetch(`http://localhost:5253/sports/${sportId}/metrics`);

    if (response.status == 200) {
        let metrics: Array<IMetricResponse> = await response.json();
        return metrics;
    }

    return [];
}

export async function createMetric(input: ICreateMetricInput): Promise<void> {
    const response = await fetch(`http://localhost:5253/sports/${input.sportId}/metrics`,
        {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(input)
        }
    );

    if (response.status != 200) {
        console.log("ERROR ERROR ERROR")
    }
}