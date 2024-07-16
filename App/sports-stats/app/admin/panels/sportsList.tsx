export default function SportsList() {

  const listClasses = "flex flex-column py-4 bg-gray-100 hover:bg-orange-300 pl-4 cursor-pointer mb-2";

  return (
      <div className="w-3/4 p-16">
        <h1 className="text-3xl flex flex-column">Sports</h1>

        <div className="flex flex-column pt-6">
          <ul className="w-1/2">
            <li className={listClasses}>Touch rugby</li>
            <li className={listClasses}>Rugby union</li>
            <li className={listClasses}>Rugby league</li>
            <li className={listClasses}>Ultimate frisbee</li>
          </ul>
        </div>
      </div>
  );
}
