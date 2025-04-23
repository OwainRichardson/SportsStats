import { IMetricChild } from "./IMetricChild";

export interface IMetric {
    label: string;
    childNodes?: IMetricChild[]
    scoreModifier?: number
}