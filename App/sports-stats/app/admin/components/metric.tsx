import { IMetricProps } from "../../types/IMetricProps";
import { MetricTypes } from "../../types/MetricTypes";
import ScoreModifierMetric from "./metrics/score-modifier-metric";

export default function Metric(metric : IMetricProps) {
    if (metric.type === MetricTypes.ScoreModifier) {
        return (
            <ScoreModifierMetric label={metric.label} scoreModifier={metric.scoreModifier} />
        );
    }

    if (metric.type === MetricTypes.Turnover) {
        return (
            <div className="bg-red-200 p-2 mb-4 rounded">
                <input className="p-2 text-left" type="text" value={metric.label} />
                <div className="mt-4 pl-8">
                    {
                        metric.childNodes?.map((childNode) => {
                            return (
                                <div className="bg-red-200 mb-4 rounded">
                                    <input className="p-2" type="text" value={childNode.label} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }

    return (
        <p>Metric typeid: {metric.type} - {metric.label}</p>
    );
}