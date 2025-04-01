"use client";

import ProtectedRoute from "./components/protectedRoute"


export default function Home() {

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <ProtectedRoute>
        <h1>Hi There</h1>
        <p>Welcome to Home page Pls Enter "/dashboard" for the tab to access the dashboard page</p>
      </ProtectedRoute>
    </main>
  );
}