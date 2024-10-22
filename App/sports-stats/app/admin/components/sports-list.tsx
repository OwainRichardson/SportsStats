import { useQuery } from "react-query";
import { getSports } from "@/app/services/sportsService";
import AdminPanel from "@/app/admin/components/admin-panel";
import Icon from "@/app/admin/components/icon";

export default function SportsList() {
    const { data, status, error } = useQuery("sports", getSports);

  if (status == "loading") {
    return (
        <div className="w-3/4 p-16">
            <span>Loading...</span>
        </div>
    )
  }

  if (error) {
    return (
        <div className="w-3/4 p-16">
            <span>Error!</span>
        </div>
    );
  }
  if (data) {
    return (
        <div className="w-3/4 p-16">
            <h1 className="text-3xl flex flex-column mb-4">Sports</h1>

            <AdminPanel width="w-full">
                <div className="flex flex-column">
                    <ul className="w-1/2">
                    {
                        data.map((sport) => {
                            return (
                            <a href={"/admin/sports/settings/" + sport.id} key={sport.id}>
                                <li className="flex flex-column py-4 bg-gray-100 hover:bg-orange-300 pl-4 cursor-pointer">
                                    <Icon iconName="sports_rugby" />
                                    {sport.name}
                                </li>
                            </a>
                            );
                        })
                    }
                    </ul>
                </div>
            </AdminPanel>
        </div>
        );
    }
}