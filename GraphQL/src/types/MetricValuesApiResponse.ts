export type MetricValueApiResponse = {
    id: string;
    value: string;
    metricId: string;
}

export type MetricValuesApiResponse = {
    sports: MetricValueApiResponse[];
}