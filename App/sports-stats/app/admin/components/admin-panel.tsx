import { IAdminPanelProps } from "@/app/types/IAdminPanelProps";
import { Children } from 'react';

export default function Checkbox({width}: IAdminPanelProps, {children}) {
    return (
        <div className="rounded-lg bg-gray-100 p-6 w-full">
            {children}
        </div>
    );
}
