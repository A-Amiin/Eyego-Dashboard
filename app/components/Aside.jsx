"use client";
import { Home, BarChart2, LogOut } from "lucide-react";

export default function Aside({ isSidebarOpen, handleLogout }) {
  return (
    <div
      className={`overflow-hidden flex flex-col rounded-xl mr-3 md-h-auto bg-gradient-to-t from-[#1E1E1E] to-[#3E3F45] text-white fixed md:static transition-transform duration-300 z-20
        ${
          isSidebarOpen
            ? "translate-x-0 w-52 translate-y-12"
            : "-translate-x-full w-0 md:w-52 md:translate-x-0"
        } `}
    >
      {/* Dashboard title */}
      <h2 className="text-xl font-bold p-4">Dashboard</h2>

      {/* Navigation items (at the top) */}
      <nav className="flex-grow-0">
        <ul className="space-y-2 p-4 pt-0">
          <li>
            <a
              href="/dashboard"
              className="flex items-center px-4 py-2 rounded hover:bg-[#624BFF]"
            >
              <Home className="w-5 h-5 mr-2" />
              Home
            </a>
          </li>
          <li>
            <a
              href="/dashboard/charts"
              className="flex items-center px-4 py-2 rounded hover:bg-[#624BFF]"
            >
              <BarChart2 className="w-5 h-5 mr-2" />
              Charts
            </a>
          </li>
        </ul>
      </nav>

      {/* Spacer to push logout button to bottom */}
      <div className="flex-grow"></div>

      {/* Logout button (at the bottom) */}
      <div className="p-4 mt-auto">
        <button
          onClick={handleLogout}
          className="flex items-center px-4 py-2 rounded hover:bg-[#624BFF] w-full"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
