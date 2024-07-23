import { IMetric } from "../../../types/IMetric";

export default function TurnoverMetric({label, childNodes} : IMetric) {
    return (
        <div className="bg-red-200 p-2 mb-4 rounded">
            <input className="p-2 text-left" type="text" value={label} />
            <div className="mt-4 pl-8">
                {
                    childNodes?.map((childNode) => {
                        return (
                            <div className="bg-red-200 mb-4 rounded">
                                <input className="p-2" type="text" value={childNode.label} />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
