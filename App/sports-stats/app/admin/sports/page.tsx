"use client"; // This is a client component 👈🏽

import AdminNavBar from "../components/navbar";
import { getSports } from "@/app/services/sportsService";
import { useQuery } from "react-query";

export default function Sports() {

  const { data, status, error } = useQuery("sports", getSports);

  if (status === 'loading') {
    return (
      <span>Loading...</span>
    )
  }

  if (error) {
    return (
      <span>Error!</span>
    );
  }

  if (data) {
    return (
      <main className="flex min-h-screen flex-row justify-between">
        <AdminNavBar />
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
      </main>
    );
  }
}
