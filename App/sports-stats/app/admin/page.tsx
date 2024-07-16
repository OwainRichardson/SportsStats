import AdminNavBar from "./components/navbar";
import SportsList from "./panels/sportsList";
import SportsSettings from "./panels/sportsSettings";

export default function Admin() {
  return (
    <main className="flex min-h-screen flex-row justify-between">
      <AdminNavBar />
      {/* <SportsList /> */}
      <SportsSettings />
    </main>
  );
}
