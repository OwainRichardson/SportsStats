import { CardProps } from "@/app/types/props/CardProps";
import Icon from "@/app/admin/components/icon";

export default function Card ({icon, text, link}: CardProps) {
    return (
        <a href={link} className="bg-white rounded shadow-md p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 cursor-pointer flex flex-col items-center mx-2 my-4">
          <div className="flex items-center">
            <Icon iconName={icon} />
            <h2 className="text-lg font-bold ml-4">{text}</h2>
          </div>
        </a>
      );

}