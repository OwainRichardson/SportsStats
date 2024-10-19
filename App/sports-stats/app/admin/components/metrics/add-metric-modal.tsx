
import Textbox from "@/app/admin/components/forms/textbox";
import Checkbox from "../forms/checkbox";
import { createMetric } from "@/app/services/metricsService";
import { useMutation } from "react-query";
import { IMetricModalInput } from "@/app/types/inputs/IMetricModalInput";

export function showModal() {
    const modalWrapper = document.getElementById("modal-wrapper");
    modalWrapper?.classList.remove("hidden");

    const modal = document.getElementById("modal");
    modal?.classList.remove("hidden");
}

export function hideModal() {
    const modalWrapper = document.getElementById("modal-wrapper");
    modalWrapper?.classList.add("hidden");

    const modal = document.getElementById("modal");
    modal?.classList.add("hidden");
}

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

    

    return (
        <>
            <div className="absolute top-0 left-0 bg-gray-200 bg-opacity-80 h-screen w-screen hidden z-10" id="modal-wrapper" onClick={hideModal}></div>
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-white p-1 rounded-md z-10 hidden" id="modal">
                <div className="w-full h-full border-orange-300 border-2 rounded-md">
                    <div className="bg-orange-300 px-6 py-2">
                        <h2 className="text-2xl flex flex-column">Add Metric</h2>
                    </div>
                    <div className="p-6">
                        <Textbox label="Metric name" value="" onChange={null} id="metric-name" size="lg" />
                        <Checkbox label="Modify score" checked={false} setChecked={undefined} id="modify-score" size="lg" />
                        <Textbox label="Modify score by" value="" onChange={null} id="modify-score-by" size="lg" />
                        <Checkbox label="Is Turnover" checked={false} setChecked={undefined} id="is-turnover" size="lg" />
                        <input type="button" value="Add" className="cursor-pointer bg-orange-500 px-4 py-2 rounded-md" onClick={handleAddMetric} />
                    </div>
                </div>
            </div>
        </>
    );
}