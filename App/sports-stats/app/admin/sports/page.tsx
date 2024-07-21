import AdminNavBar from "../components/navbar";
import { getSports } from "@/app/services/sportsService";

export default function Sports() {
  return (
    <main className="flex min-h-screen flex-row justify-between">
      <AdminNavBar />
      <div className="w-3/4 p-16">
        <h1 className="text-3xl flex flex-column">Sports</h1>

        <div className="flex flex-column pt-6">
          <ul className="w-1/2">
            {
                getSports().map((sport, index) => {
                    return (
                      <a href={"/admin/sports/settings/" + sport.id}><li className="flex flex-column py-4 bg-gray-100 hover:bg-orange-300 pl-4 cursor-pointer mb-2">{sport.name}</li></a>
                    );
                })
            }
          </ul>
        </div>
      </div>
    </main>
  );
}
