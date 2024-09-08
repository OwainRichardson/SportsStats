export default function SettingsBox({children}) {
    return (
        <div className="mt-6 border-2 border-orange-500 rounded p-6 bg-orange-100">
          <h2 className="text-2xl flex flex-column mb-2">Basic settings</h2>
            {children}
        </div>
    );
}