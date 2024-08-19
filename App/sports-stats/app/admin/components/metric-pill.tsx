import { IMetricPilInput } from "@/app/types/IMetricPillInput";

export default function MetricPill({label}: IMetricPilInput) {
    return (
        <span className={`items-center py-1 px-2 rounded-full text-xs mr-1 ${label}-pill`}>
            {label}
        </span>
    );
}