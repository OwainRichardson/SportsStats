import { useQuery } from "react-query";
import { getSports } from "@/app/services/sportsService";
import AdminPanel from "@/app/admin/components/admin-panel";
import Card from "@/app/components/general/card";

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

                <div className="flex flex-wrap">
                    {
                        data.map((sport) => {
                            return (
                                <Card key={sport.id} icon={sport.icon} text={sport.name} link={`sports/${sport.id}/settings`} />
                            );
                        })
                    }
                </div>
        </div>
        );
    }
}