"use client";

import Products from "../components/product";
import ProtectedRoute from "../components/protectedRoute"
export default function Dashboard() {
    return (
        <ProtectedRoute>
            <div>
                <Products />
            </div>
        </ProtectedRoute>
    );
}