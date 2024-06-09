export type MetricApiResponse = {
    id: string;
    name: string;
    sportId: string;
}

export type MetricsApiResponse = {
    sports: MetricApiResponse[];
}