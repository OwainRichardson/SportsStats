import { IMetricPilInput } from "@/app/types/IMetricPillInput";

export default function MetricPill({label, colour, value}: IMetricPilInput) {

    if (value === true) {        
        return (
            <span className={`items-center py-1 px-2 rounded-full text-xs mr-1 ${colour} inline-block`}>
                {label}
            </span>
        );
    }
}