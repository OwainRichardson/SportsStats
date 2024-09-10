import { IButtonProps } from "@/app/types/IButtonProps";

export default function Checkbox({id, label, onClick}: IButtonProps) {
    return (
        <div className="px-4 py-2 inline-block cursor-pointer border-2 bg-green-700 text-white" id={id} onClick={() => onClick()}>
            {label}
        </div>
    );
}
