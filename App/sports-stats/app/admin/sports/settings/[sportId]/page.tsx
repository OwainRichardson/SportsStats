"use client"; // This is a client component 👈🏽

import AdminNavBar from "../../../components/navbar";
import { useParams } from 'next/navigation'
import { getSport } from "@/app/services/sportsService";
import { useQuery } from "react-query";
import MetricList from "@/app/admin/components/metrics/metric-list";
import SportSettings from "@/app/admin/components/settings/sport-settings";

export default function SportsSettings() {
  const { sportId } = useParams() as { sportId: string }
  const sportQuery = useQuery("sport", () => getSport(sportId));

  return (
    <main className="flex min-h-screen flex-row justify-between">
      <AdminNavBar />
      <div className="w-3/4 p-16">
        <h1 className="text-3xl flex flex-row">Settings: {sportQuery.data?.name ?? "Loading..."}</h1>

        <SportSettings sportId={sportId} />
        <MetricList sportId={sportId} />
      </div>
    </main>
  );
}
