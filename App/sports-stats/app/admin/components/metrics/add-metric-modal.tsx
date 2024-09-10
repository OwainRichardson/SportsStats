
import FormInput from "@/app/admin/components/form-input";
import Checkbox from "../checkbox";
import { createMetric } from "@/app/services/metricsService";
import { useMutation } from "react-query";
import { IMetricModalInput } from "@/app/types/inputs/IMetricModalInput";

export default function AddMetricModal({ sportId }: IMetricModalInput) {
  const mutation = useMutation(createMetric);

  function handleAddMetric() {
        console.log("HandleAddMetric");
        const metricName = document.getElementById('metric-name') as HTMLInputElement;
        const modifyScore = document.getElementById('modify-score') as HTMLInputElement;
        const modifyScoreBy = document.getElementById('modify-score-by') as HTMLInputElement;
        const isTurnover = document.getElementById('is-turnover') as HTMLInputElement;

        console.log(metricName?.value + " " + modifyScore?.checked + " " + modifyScoreBy?.value + " " + isTurnover?.checked);
        mutation.mutate({metricName: metricName?.value,
                            isScoreModifier: modifyScore?.checked,
                            scoreModifier: modifyScoreBy == null ? null : modifyScoreBy.value == null ? null : parseInt(modifyScoreBy.value),
                            isTurnover: isTurnover?.checked,
                            sportId: sportId
        });

        hideModal();
    }

    function hideModal() {
        const modalWrapper = document.getElementById("modal-wrapper");
        modalWrapper?.classList.add("hidden");
    }

    return (
        <div className="absolute top-0 left-0 bg-gray-200 bg-opacity-80 h-screen w-screen hidden" id="modal-wrapper">
            <div className="absolute top-1/4 left-1/4 bg-white h-1/3 w-1/2 p-6 border-orange-500 border-2 rounded-sm">
                <div>
                    <h2 className="text-2xl flex flex-column mb-2">Add Metric</h2>
                </div>
                <div>
                    <FormInput label="Metric name" value="" onChange={null} id="metric-name" />
                    <Checkbox label="Modify score" checked={false} setChecked={undefined} id="modify-score" />
                    <FormInput label="Modify score by" value="" onChange={null} id="modify-score-by" />
                    <Checkbox label="Is Turnover" checked={false} setChecked={undefined} id="is-turnover" />
                    <input type="button" value="Add" className="cursor-pointer bg-orange-500 px-4 py-2" onClick={handleAddMetric} />
                </div>
            </div>
        </div>
    );
}