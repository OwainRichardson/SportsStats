import { IMetricPilInput } from "@/app/types/IMetricPillInput";

export default function MetricPill({label, colour}: IMetricPilInput) {

    const background = `bg-${colour}-200`;

    return (
        <span className={`items-center py-1 px-2 rounded-full text-xs mr-1 ${background} inline-block`}>
            {label}
        </span>
    );
}