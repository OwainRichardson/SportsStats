export interface ICreateMetricInput {
    metricName: string;
    isScoreModifier: boolean;
    scoreModifier: number | null;
    isTurnover: boolean;
    sportId: string;
}