"use client"; // This is a client component 👈🏽

import AdminNavBar from "../../../components/navbar";
import { useParams } from 'next/navigation'
import { getSport } from "@/app/services/sportsService";
import InputWrapper from "../../../components/input-wrapper";
import { IInput } from "@/app/types/IInput";
import { useQuery } from "react-query";
import MetricList from "@/app/admin/components/metric-list";

export default function SportsSettings() {
  const { sportId } = useParams() as { sportId: string }
  const sportQuery = useQuery("sport", () => getSport(sportId));
  const sport = sportQuery.data;

  const inputs: IInput[] = [
    { label: "Match length (mins)", value: "40"},
    { label: "Number of periods", value: "2"},
    { label: "Name of period", value: "half"},
  ];  

  return (
    <main className="flex min-h-screen flex-row justify-between">
      <AdminNavBar />
      <div className="w-3/4 p-16">
        <h1 className="text-3xl flex flex-row">Settings: {sport?.name}</h1>

        <div className="mt-6 border-2 border-orange-500 rounded p-6 bg-orange-100">
          <h2 className="text-2xl flex flex-column mb-2">Basic settings</h2>
          {
            inputs.map((input) => {
              return (
                <InputWrapper label={input.label} value={input.value} key={input.label} />
              );
            })
          }
        </div>

        <MetricList sportId={sportId} />
      </div>
    </main>
  );
}
