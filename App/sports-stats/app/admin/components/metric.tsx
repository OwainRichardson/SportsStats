import { IMetricProps } from "../../types/IMetricProps";
import { MetricTypes } from "../../types/MetricTypes";
import NonTurnoverMetric from "./metrics/non-turnover-metric";
import ScoreModifierMetric from "./metrics/score-modifier-metric";
import TurnoverMetric from "./metrics/turnover-metric";

export default function Metric(metric : IMetricProps) {
    if (metric.type === MetricTypes.ScoreModifier) {
        return (
            <ScoreModifierMetric label={metric.label} scoreModifier={metric.scoreModifier} />
        );
    }

    if (metric.type === MetricTypes.Turnover) {
        return (
            <TurnoverMetric label={metric.label} childNodes={metric.childNodes} />
        );
    }

    if (metric.type === MetricTypes.NonTurnover) {
        return (
            <NonTurnoverMetric label={metric.label} childNodes={metric.childNodes} />
        )
    }

    return (
        <p>Metric typeid: {metric.type} - {metric.label}</p>
    );
}