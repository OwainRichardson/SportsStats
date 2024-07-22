import { IInputWrapperProps } from "@/app/types/IInputWrapperProps";

export default function InputWrapper({label, value}: IInputWrapperProps) {
    return (
        <div className="flex flex-column mb-4 h-8 items-center">
            <label className="w-1/6">{label}: </label>
            <input className="h-full border-2 rounded border-gray-300 pl-2 py-4 focus:outline-none focus:border-orange-500 focus:ring-0" type="text" value={value}></input>
        </div>
    );
}