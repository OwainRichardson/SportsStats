import { getMetrics } from "@/app/services/metricsService";
import { useQuery } from "react-query";
import Metric from "./metric";
import { IMetricListInput } from "@/app/types/inputs/IMetricListInput";
import MetricBox from "./metric-box";
import FormInput from "@/app/admin/components/form-input";

export default function MetricList({ sportId }: IMetricListInput) {
  const { data, status, error } = useQuery("metrics", () => getMetrics(sportId));

  if (status == "loading") {
    return (
        <MetricBox>
            <span>Loading...</span>
        </MetricBox>
    )
  }

  if (error) {
    return (
      <MetricBox>
        <span>Error!</span>
      </MetricBox>
    );
  }

  if (data) {
      return (
        <>
          <MetricBox>
            {
              data.map((metric) => {
                  return (
                      <Metric {...metric} key={metric.name} />
                  );
              })
            }
            <input className="px-4 py-2 bg-red-500 cursor-pointer" type="button" value="+" />
          </MetricBox>
          <div className="absolute top-0 left-0 bg-gray-200 bg-opacity-80 h-screen w-screen">
            <div className="absolute top-1/4 left-1/4 bg-white h-1/3 w-1/2 p-6 border-orange-500 border-2 rounded-sm">
              <h2>Add Metric</h2>
              <FormInput label="Metric name" value="" onChange={null} />
            </div>
          </div>
        </>
      );
    }   
}