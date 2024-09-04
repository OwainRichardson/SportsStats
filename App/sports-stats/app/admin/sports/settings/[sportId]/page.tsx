"use client"; // This is a client component 👈🏽

import AdminNavBar from "../../../components/navbar";
import { useParams } from 'next/navigation'
import { getSports } from "@/app/services/sportsService";
import InputWrapper from "../../../components/input-wrapper";
import Metric from "../../../components/metric";
import { IMetricProps } from "@/app/types/IMetricProps";
import { IMetricChild } from "@/app/types/IMetricChild";
import { IInput } from "@/app/types/IInput";

export default function SportsSettings() {
  const { sportId } = useParams() as { sportId: string }
  const selectedSportId = parseInt(sportId);
  const sport = { name: 'touch rugby' };

  const turnoverChildren: IMetricChild[] = [
    { label: 'Ball down' },
    { label: 'Poor ruck' }
  ];

  const nonTurnoverChildren: IMetricChild[] = [
    { label: 'Hard touch' },
    { label: 'Offisde' }
  ];

  const metrics: IMetricProps[] = [
    { label: 'Try scored', isScoreModifier: true, scoreModifier: 5, isTurnover: true },
  ];

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

        <div className="mt-6 border-2 border-blue-500 rounded p-6 bg-blue-100">
          <h2 className="text-2xl flex flex-column mb-2">{sport?.name} metrics</h2>
        {
          metrics.map((metric) => {
            return (
              <Metric {...metric} key={metric.label} />
            );
          })
        }
        </div>
      </div>
    </main>
  );
}
