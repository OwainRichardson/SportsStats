import { Dispatch, SetStateAction } from "react";

export interface ICheckboxProps {
    checked: boolean;
    setChecked?: Dispatch<SetStateAction<boolean>>;
    label: string;
    id: string;
}