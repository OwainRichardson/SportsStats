export default function SportsSettings() {

  return (
      <div className="w-3/4 p-16">
        <h1 className="text-3xl flex flex-row">Sports settings</h1>

        <div className="mt-6">
          <h2 className="text-2xl flex flex-column">Basic settings</h2>

          <div className="flex flex-column">
            <label>Match length: </label>
            <input type="text"></input>
          </div>

          <div className="flex flex-column">
            <label>Periods: </label>
            <input type="text"></input>
          </div>

          <div className="flex flex-column">
            <label>Name of periods: </label>
            <input type="text"></input>
          </div>
        </div>
      </div>
  );
}
