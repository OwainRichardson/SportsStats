export default function HeaderNavBar () {
    return (
        <nav className="w-full h-16 bg-orange-600 text-white flex justify-between items-center fixed top-0 left-0 z-10">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="logo">
              <h1 className="text-2xl font-bold">Your Logo</h1>
            </div>
            <ul className="nav-links flex justify-between items-center">
              <li className="nav-link">
                <a href="#" className="text-lg hover:text-gray-300">
                  Home
                </a>
              </li>
              <li className="nav-link">
                <a href="#" className="text-lg hover:text-gray-300">
                  About
                </a>
              </li>
              <li className="nav-link">
                <a href="#" className="text-lg hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      );
  };