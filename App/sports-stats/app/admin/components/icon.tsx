import { IconProps } from "@/app/types/props/IconProps";

export default function Icon({iconName}: IconProps) {
    return (
        <span className="material-symbols-outlined mr-4">
            {iconName}
        </span>
    );
}
