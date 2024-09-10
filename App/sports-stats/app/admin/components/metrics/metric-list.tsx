import { getMetrics } from "@/app/services/metricsService";
import { useQuery } from "react-query";
import Metric from "./metric";
import { IMetricListInput } from "@/app/types/inputs/IMetricListInput";
import MetricBox from "./metric-box";
import FormInput from "@/app/admin/components/form-input";
import AddMetricModal from "./add-metric-modal";

export default function MetricList({ sportId }: IMetricListInput) {
  const { data, status, error } = useQuery("metrics", () => getMetrics(sportId));

  function showModal() {
    const modalWrapper = document.getElementById("modal-wrapper");
        modalWrapper?.classList.remove("hidden");
  }

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
            <input className="px-4 py-2 bg-red-500 cursor-pointer" type="button" value="+" onClick={showModal} />
          </MetricBox>
          <AddMetricModal sportId={sportId} />
        </>
      );
    }   
}