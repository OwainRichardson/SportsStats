import { ICheckboxProps } from "@/app/types/ICheckboxProps"

export default function Checkbox({checked, setChecked, label, id, size}: ICheckboxProps) {
    function toggleChecked() {
        if (setChecked) {
            setChecked(!checked);
        }
    }

    let labelsize = '';

    console.log(size);

    if (size == 'sm') {
        labelsize = 'w-1/6';
    } else if (size == 'md') {
        labelsize = 'w-1/4';
    } else if (size == 'lg') {
        labelsize = 'w-1/3';
    }

    if (setChecked) {
        return (
            <div className="flex flex-column mb-4 h-8 items-center">
                <label className={`${labelsize}`}>{label}:</label>
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
            <label className={`${labelsize}`}>{label}:</label>
            <input className="hover:cursor-pointer" 
                    type="checkbox" 
                    defaultChecked={checked} 
                    id={id}  />
        </div>
    );
}