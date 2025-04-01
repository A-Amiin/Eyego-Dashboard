"use client";
import { useState } from "react";
import { Home, BarChart2, Menu, LogOut } from "lucide-react";
import { logoutUser } from "../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);
    const router = useRouter();

    const handleLogout = async () => {
        try {
            console.log("Before Logout:", authState);
            await dispatch(logoutUser());
            localStorage.removeItem('persist:root');
            localStorage.clear();
            router.push("/");
        } catch (error) {
            dispatch(resetAuth());
            router.push("/");
        }
    };

    return (
        <div className="flex min-h-screen">
            {/* Overlay for mobile when sidebar is open */}
            {isSidebarOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-opacity-50 z-10"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`overflow-hidden md-h-auto bg-gray-800 text-white fixed md:static transition-transform duration-300 z-20
        ${isSidebarOpen ? "translate-x-0 w-64 translate-y-12" : "-translate-x-full w-0 md:w-64 md:translate-x-0"} 
        flex flex-col`}>

                {/* Dashboard title */}
                <h2 className="text-xl font-bold p-4">Dashboard</h2>

                {/* Navigation items (at the top) */}
                <nav className="flex-grow-0">
                    <ul className="space-y-2 p-4 pt-0">
                        <li>
                            <a href="/dashboard" className="flex items-center px-4 py-2 rounded hover:bg-gray-700">
                                <Home className="w-5 h-5 mr-2" />
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/dashboard/charts" className="flex items-center px-4 py-2 rounded hover:bg-gray-700">
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
                        className="flex items-center px-4 py-2 rounded hover:bg-gray-700 w-full"
                    >
                        <LogOut className="w-5 h-5 mr-2" />
                        Sign Out
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <header className="bg-white shadow px-8 py-4 flex justify-between items-center sticky top-0 z-10">
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setSidebarOpen(!isSidebarOpen)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    <h1 className="text-xl font-semibold">Dashboard</h1>
                </header>
                <main className="p-3 flex-1">{children}</main>
            </div>
        </div>
    );
}