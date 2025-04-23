export interface IMetricResponse {
    id: string;
    name: string;
    isScoreModifier: boolean;
    scoreModifier?: number;
    isTurnover: boolean;
}