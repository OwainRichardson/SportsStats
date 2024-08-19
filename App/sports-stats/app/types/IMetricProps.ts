import { IMetricChild } from "./IMetricChild";

export interface IMetricProps {
    label: string;
    childNodes?: IMetricChild[]
    isScoreModifier: boolean
    scoreModifier?: number
    isTurnover: boolean
}