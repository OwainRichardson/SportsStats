export default function AdminNavBar() {
    return (
        <div className="flex flex-col w-1/4 bg-orange-500 h-screen">
            
            <div className="p-16 flex flex-col">
            <span className="text-white text-3xl">Sports Stats</span>
            <span className="text-white text-xl">Admin</span>
            </div>

            <ul className="text-white">
                <a href="/admin/sports"><li className="pt-6 pb-6 pl-16 cursor-pointer hover:bg-gray-200 hover:text-orange-500">Sports</li></a>
                <li className="pt-6 pb-6 pl-16 cursor-pointer hover:bg-gray-200 hover:text-orange-500">Users</li>
            </ul>
        </div>
    );
}