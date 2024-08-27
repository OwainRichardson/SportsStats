import { Dispatch, SetStateAction } from "react";

export interface IShowHideCheckboxProps {
    value?: string;
    showHideState: boolean;
    setShowHideState: Dispatch<SetStateAction<boolean>>;
}