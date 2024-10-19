import { IAdminPanelProps } from "@/app/types/IAdminPanelProps";

export default function AdminPanel({width, children}: IAdminPanelProps) {
    return (
        <div className={`rounded-lg bg-gray-100 p-6 ${width}`}>
            {children}
        </div>
    );
}
