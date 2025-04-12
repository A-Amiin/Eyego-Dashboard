import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = ({ setSidebarOpen, handleLogout }) => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <header className="bg-white rounded-xl  shadow px-8 py-4 flex justify-between items-center sticky top-0 z-10">
      <button
        className="md:hidden text-gray-700"
        onClick={() => setSidebarOpen((prev) => !prev)}
      >
        <Menu className="w-6 h-6" />
      </button>

      <h1 className="text-xl font-semibold">Dashboard</h1>

      {/* User dropdown */}
      <div className="relative">
        <button
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 focus:outline-none"
          onClick={() => setUserDropdownOpen((prev) => !prev)}
        >
          <img
            src="./default-avatar.jpg"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
        </button>

        {userDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-50">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
