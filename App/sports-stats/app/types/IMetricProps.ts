import { IMetricChild } from "./IMetricChild";

export interface IMetricProps {
    name: string;
    childNodes?: IMetricChild[]
    isScoreModifier: boolean
    scoreModifier?: number
    isTurnover: boolean
}