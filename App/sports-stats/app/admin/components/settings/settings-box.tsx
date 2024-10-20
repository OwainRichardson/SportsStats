import { ISettingsBoxProps } from "@/app/types/ISettingsBoxProps";

export default function SettingsBox({children}: ISettingsBoxProps) {
    return (
        <div className="mt-6 border-2 border-orange-500 rounded-md p-6 bg-orange-100">
          <h2 className="text-2xl flex flex-column mb-2">Basic settings</h2>
            {children}
        </div>
    );
}