import { IMetricProps } from "../../types/IMetricProps";
import MetricPill from "./metric-pill";

export default function Metric(metric : IMetricProps) {
    return (
        <div className="bg-green-200 p-2 mb-4 rounded">
            <span className="p-2 text-left">{metric.label}</span>

            {
                metric.isScoreModifier ?
                    <MetricPill label="score" />
                    : ""
            }
            {
                metric.isTurnover ?
                <MetricPill label="turnover" />
                : ""
            }                
        </div>
    );
}