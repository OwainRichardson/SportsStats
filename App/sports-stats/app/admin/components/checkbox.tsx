import { ICheckboxProps } from "@/app/types/ICheckboxProps"

export default function Checkbox({checked, setChecked, label, id}: ICheckboxProps) {
    function toggleChecked() {
        if (setChecked) {
            setChecked(!checked);
        }
    }

    if (setChecked) {
        return (
            <div className="flex flex-column mb-4 h-8 items-center">
                <label className="w-1/6">{label}:</label>
                <input className="hover:cursor-pointer" 
                        type="checkbox" 
                        defaultChecked={checked} 
                        onChange={toggleChecked} 
                        id={id} />
            </div>
        );
    }

    return (
        <div className="flex flex-column mb-4 h-8 items-center">
            <label className="w-1/6">{label}:</label>
            <input className="hover:cursor-pointer" 
                    type="checkbox" 
                    defaultChecked={checked} 
                    id={id}  />
        </div>
    );
}