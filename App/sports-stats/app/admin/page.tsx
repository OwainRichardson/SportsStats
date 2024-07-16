import AdminNavBar from "./components/navbar";
import SportsSettings from "./components/sportsSettings";

export default function Admin() {
  return (
    <main className="flex min-h-screen flex-row justify-between">
      <AdminNavBar />
      <SportsSettings />
    </main>
  );
}
