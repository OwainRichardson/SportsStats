import { getMetrics } from "@/app/services/metricsService";
import { useQuery } from "react-query";
import Metric from "./metric";
import { IMetricListInput } from "@/app/types/inputs/IMetricListInput";
import MetricBox from "./metric-box";
import AddMetricModal, { showModal } from "./add-metric-modal";
import Button from "@/app/admin/components/forms/button";

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
          <Button label="Add Metric" onClick={showModal} id="add-metric" />
          </MetricBox>
          <AddMetricModal sportId={sportId} />
        </>
      );
    }   
}