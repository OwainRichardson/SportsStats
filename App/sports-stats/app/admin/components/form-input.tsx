import { IInput } from "@/app/types/IInput";

export default function FormInput(input: IInput) {

    if (input.onChange)
    {
        return (
            <div className="flex flex-column mb-4 h-8 items-center">
                <label className="w-1/6">{input.label}: </label>
                <input className="h-full border-2 rounded border-gray-300 pl-2 py-4 focus:outline-none focus:border-orange-500 focus:ring-0" 
                        type="text"
                        defaultValue={input.value} 
                        onChange={(event) => input.onChange(event, input)} 
                        id={input.id} />
            </div>
        );
    }

    return (
        <div className="flex flex-column mb-4 h-8 items-center">
            <label className="w-1/6">{input.label}: </label>
            <input className="h-full border-2 rounded border-gray-300 pl-2 py-4 focus:outline-none focus:border-orange-500 focus:ring-0" 
                    type="text"
                    defaultValue={input.value} 
                    id={input.id} />
        </div>
    );
}