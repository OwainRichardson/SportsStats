"use client"; // This is a client component 👈🏽

import AdminNavBar from "../components/navbar";
import SportsList from "../components/sports-list";

export default function Sports() {
  return (
    <main className="flex min-h-screen flex-row justify-between">
      <AdminNavBar />
      <SportsList />        
    </main>
  );
}
