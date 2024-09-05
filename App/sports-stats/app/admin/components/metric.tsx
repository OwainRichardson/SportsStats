import { IMetricProps } from "../../types/IMetricProps";
import MetricPill from "./metric-pill";
import ShowHideCheckbox from "./show-hide-checkbox";
import Checkbox from "./checkbox";
import { useState } from 'react';

function toggleSlideDown(e: React.SyntheticEvent) {
    const clickedDiv = e.target as HTMLButtonElement;

    const slideDown = clickedDiv.nextElementSibling;
    slideDown?.classList.toggle("hidden");
}

export default function Metric(metric : IMetricProps) {
    const [isScoreModifier, setIsScoreModifier] = useState(metric.isScoreModifier);
    const [isTurnover, setIsTurover] = useState(metric.isTurnover);

    function toggleIsTurnover() {
        setIsTurover(!isTurnover);
    }

    return (
        <div className="mb-4">
            <div className="bg-green-300 p-2 hover:cursor-pointer" onClick={toggleSlideDown}>
                <span className="p-2 text-left">{metric.name}</span>
                {
                    isScoreModifier ?
                        <MetricPill label="score" />
                        : ""
                }
                {
                    isTurnover ?
                        <MetricPill label="turnover" />
                        : ""
                }                
            </div>
            <div className="bg-green-200 p-2 hidden">
                <ShowHideCheckbox 
                    showHideState={isScoreModifier}
                    setShowHideState={setIsScoreModifier}
                    value={metric.scoreModifier?.toString()} />

                    <Checkbox
                        checked={isTurnover}
                        setChecked={setIsTurover}
                        label="Is turnover" />
            </div>
        </div>
    );
}