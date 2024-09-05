import { getMetrics } from "@/app/services/metricsService";
import { useQuery } from "react-query";
import Metric from "./metric";
import { IMetricListInput } from "@/app/types/inputs/IMetricListInput";

export default function MetricList({ sportId }: IMetricListInput) {
  const metricsQuery = useQuery("metrics", () => getMetrics(sportId));

  if (metricsQuery.data) {
    return (
        <div className="mt-6 border-2 border-blue-500 rounded p-6 bg-blue-100">
          <h2 className="text-2xl flex flex-column mb-2">Metrics</h2>
            {
            metricsQuery.data.map((metric) => {
                return (
                    <Metric {...metric} key={metric.name} />
                );
            })
            }
        </div>
        );
    }   
}