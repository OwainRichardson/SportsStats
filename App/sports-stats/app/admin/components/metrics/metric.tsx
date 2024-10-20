import { IMetricProps } from "../../../types/IMetricProps";
import MetricPill from "./metric-pill";
import Checkbox from "../forms/checkbox";
import { useState } from 'react';
import Textbox from "../forms/textbox";

function toggleSlideDown(metricId: string) {
    const slideDown = document.getElementById(`slidedown-${metricId}`);
    slideDown?.classList.toggle("hidden");
}

export default function Metric(metric : IMetricProps) {
    const [isScoreModifier, setIsScoreModifier] = useState(metric.isScoreModifier);
    const [isTurnover, setIsTurover] = useState(metric.isTurnover);

    return (
        <div className="mb-4">
            <div className="bg-orange-300 p-2 rounded-md hover:cursor-pointer" onClick={() => toggleSlideDown(metric.id)}>
                <span className="p-2 text-left">{metric.name}</span>
                {
                    isScoreModifier ?
                        <MetricPill label="score" colour="green" />
                        : ""
                }
                {
                    isTurnover ?
                        <MetricPill label="turnover" colour="yellow" />
                        : ""
                }                
            </div>
            <div className="bg-orange-200 pl-4 py-2 rounded-md hidden" id={`slidedown-${metric.id}`}>
                <Checkbox
                    checked={isScoreModifier}
                    setChecked={setIsScoreModifier}
                    label="Is score modifier"
                    id={`is-score-modifier-${metric.id}`} 
                    size="sm" />

                <Textbox
                    label="Modifies score by"
                    id={`score-modifier-${metric.id}`}
                    size="sm" 
                    value={metric.scoreModifier?.toString() ?? "0"} 
                    onChange={null}/>

                <Checkbox
                    checked={isTurnover}
                    setChecked={setIsTurover}
                    label="Is turnover"
                    id={`is-turnover-${metric.id}`} 
                    size="sm" />
            </div>
        </div>
    );
}