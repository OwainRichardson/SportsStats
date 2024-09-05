import { useQuery } from "react-query";
import { getSports } from "@/app/services/sportsService";

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
            <h1 className="text-3xl flex flex-column">Sports</h1>

            <div className="flex flex-column pt-6">
                <ul className="w-1/2">
                {
                    data.map((sport) => {
                        return (
                        <a href={"/admin/sports/settings/" + sport.id}><li className="flex flex-column py-4 bg-gray-100 hover:bg-orange-300 pl-4 cursor-pointer mb-2">{sport.name}</li></a>
                        );
                    })
                }
                </ul>
            </div>
        </div>
        );
    }
}