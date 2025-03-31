"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Login from "../app/login/page";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check for token in localStorage
    const checkAuth = () => {
      try {
        // Check if we have auth data in localStorage (from redux-persist)
        const persistedAuth = localStorage.getItem("persist:root");

        if (persistedAuth) {
          const parsedAuth = JSON.parse(persistedAuth);

          // Check if we have auth data with a token
          if (parsedAuth.auth) {
            const authData = JSON.parse(parsedAuth.auth);
            if (authData.token) {
              setIsLogin(true);
              // Redirect to dashboard if token exists
              router.push("/dashboard");
              return;
            }
          }
        }

        // Fallback to Firebase auth check
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setIsLogin(!!user);
          if (user) {
            // Redirect to dashboard if authenticated via Firebase
            router.push("/dashboard");
          }
          setLoading(false);
        });

        return () => unsubscribe();
      } catch (error) {
        console.error("Auth check error:", error);
        setIsLogin(false);
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      {isLogin ? (
        <>
          <h1>Hi There</h1>
          <p>Welcome to Home page Pls Enter "/dashboard" for the tab to access the dashboard page</p>
        </>
      ) : (
        <Login />
      )}
    </main>
  );
}