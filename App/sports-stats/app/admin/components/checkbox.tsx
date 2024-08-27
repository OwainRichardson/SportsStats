import { ICheckboxProps } from "@/app/types/ICheckboxProps"

export default function ShowHideCheckbox({checked, setChecked, label}: ICheckboxProps) {
    function toggleChecked() {
        setChecked(!checked);
    }

    return (
        <div className="flex flex-column mb-4 h-8 items-center p-2">
            <label className="w-1/6">{label}:</label>
            <input className="hover:cursor-pointer" type="checkbox" defaultChecked={checked} onChange={toggleChecked} />
        </div>
    );
}