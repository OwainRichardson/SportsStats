import { IMetricProps } from "../../types/IMetricProps";
import MetricPill from "./metric-pill";

function toggleSlideDown(e: React.SyntheticEvent) {
    const clickedDiv = e.target as HTMLButtonElement;

    const slideDown = clickedDiv.nextElementSibling;
    slideDown?.classList.toggle("hidden");
}

let isScoreModifier = true;

export default function Metric(metric : IMetricProps) {
    return (
        <div className="mb-4">
            <div className="bg-green-300 p-2 hover:cursor-pointer" onClick={toggleSlideDown}>
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
            <div className="bg-green-200 p-2 hidden">
                <div className="flex flex-column mb-4 h-8 items-center p-2">
                    <label className="w-1/6">Modify score:</label>
                    <input className="hover:cursor-pointer" type="checkbox"></input>
                </div>
                <div className={`flex flex-column mb-4 h-8 items-center p-2 ${isScoreModifier ? 'visible' : 'hidden'}`}>
                    <label className="w-1/6">Modify score by: </label>
                    <input className="h-full border-2 rounded border-gray-300 pl-2 py-4 focus:outline-none focus:border-orange-500 focus:ring-0" type="text" value=""></input>
                </div>
                <div className="flex flex-column mb-4 h-8 items-center p-2">
                    <label className="w-1/6">Turnover possession:</label>
                    <input className="hover:cursor-pointer" type="checkbox"></input>
                </div>
            </div>
        </div>
    );
}