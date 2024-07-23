import { IMetric } from "../../../types/IMetric";

export default function ScoreModifierMetric({label, scoreModifier} : IMetric) {
    return (
        <div className="bg-green-200 p-2 mb-4 rounded">
            <span className="pr-6">Score modifier</span>
            <input className="p-2 text-left" type="text" value={label} />
            <span className="mx-4">Add</span>
            <input type="text" value={scoreModifier} className="w-12 py-2 text-center" />
            <span className="mx-4">to</span>
            <select className="p-2 text-center">
                <option value=""></option>
                <option value="score">Score</option>
            </select>
        </div>
    );
}
