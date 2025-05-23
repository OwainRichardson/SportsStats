import { IMetricBoxProps } from "@/app/types/IMetricBoxProps";
import Icon from "../icon";

export default function MetricBox({children}: IMetricBoxProps) {
    return (
        <div className="mt-6 border-2 border-blue-500 rounded p-6 bg-blue-100 rounded-md">
            <h2 className="text-2xl flex flex-column mb-2">Metrics</h2>
            {children}
        </div>
    );
}