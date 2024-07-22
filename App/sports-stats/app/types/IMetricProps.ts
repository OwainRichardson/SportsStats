import { IMetricChild } from "./IMetricChild";
import { MetricTypes } from "./MetricTypes";

export interface IMetricProps {
    type: MetricTypes;
    label: string;
    childNodes?: IMetricChild[]
    scoreModifier?: number
}