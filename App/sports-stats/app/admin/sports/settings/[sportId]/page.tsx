"use client"; // This is a client component 👈🏽

import AdminNavBar from "../../../components/navbar";
import { useParams } from 'next/navigation'
import { getSports } from "@/app/services/sportsService";
import InputWrapper from "../../../components/input-wrapper";

export default function SportsSettings() {
  const { sportId } = useParams() as { sportId: string }

  const selectedSportId = parseInt(sportId);
  const sport = getSports().find(sport => sport.id == selectedSportId);

  return (
    <main className="flex min-h-screen flex-row justify-between">
      <AdminNavBar />
      <div className="w-3/4 p-16">
        <h1 className="text-3xl flex flex-row">Settings: {sport?.name}</h1>

        <div className="mt-6 border-2 border-orange-500 rounded p-6 bg-orange-100">
          <h2 className="text-2xl flex flex-column mb-2">Basic settings</h2>

          <InputWrapper label="Match length (mins)" value="40" />
          <InputWrapper label="Periods" value="2" />
          <InputWrapper label="Name of periods" value="2" />
        </div>

        <div className="mt-6 border-2 border-blue-500 rounded p-6 bg-orange-100">
          <h2 className="text-2xl flex flex-column mb-2">{sport?.name} metrics</h2>

          {/* introduce metric types 
                - scoring metric
                  - mutates score by a custom number of points
                - turnover metric
                  - gives possession to the other team
                  - option to add pitch location
                - non-turnover metric
                  - keeps possession
                  - option to add pitch location
                */}
        </div>
      </div>
    </main>
  );
}
