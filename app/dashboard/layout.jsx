"use client";
import { useState, useEffect } from "react";
import { logoutUser } from "../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      console.log("Before Logout:", authState);
      dispatch(logoutUser());
      localStorage.removeItem("persist:root");
      localStorage.clear();
      router.push("/");
    } catch (error) {
      dispatch(resetAuth());
      router.push("/");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Run once on mount in case user opens on a large screen
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen bg-[#F1F5F9] p-2">
      {isSidebarOpen ? (
        <div
          className="md:hidden fixed inset-0 bg-opacity-50 z-10"
          onClick={() => setSidebarOpen(false)}
        />
      ) : null}

      <Aside isSidebarOpen={isSidebarOpen} handleLogout={handleLogout} />

      <div className="flex-1 flex flex-col">
        <Navbar handleLogout={handleLogout} setSidebarOpen={setSidebarOpen} />
        <main className="p-3 flex-1">{children}</main>
      </div>
    </div>
  );
}
