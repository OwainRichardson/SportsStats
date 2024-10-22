import { IMetricPillContainer } from "@/app/types/inputs/IMetricPillContainer";
import MetricPill from "./metric-pill";

export default function MetricPillContainer({isScoreModifier, isTurnover}: IMetricPillContainer) {

    return (
        <>
            <MetricPill label="score" colour="bg-green-300" value={isScoreModifier} />
            <MetricPill label="turnover" colour="bg-yellow-300" value={isTurnover} />
        </>
    );
}