"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// This would be a wrapper component for your dashboard
export default function ProtectedDashboard({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = () => {
            try {
                // Check localStorage for token
                const persistedAuth = localStorage.getItem("persist:root");

                if (persistedAuth) {
                    const parsedAuth = JSON.parse(persistedAuth);

                    if (parsedAuth.auth) {
                        const authData = JSON.parse(parsedAuth.auth);

                        if (authData.token) {
                            setIsAuthenticated(true);
                            setLoading(false);
                            return;
                        }
                    }
                }

                // No valid token found, redirect to login
                router.push("/");
                setLoading(false);
            } catch (error) {
                console.error("Auth verification error:", error);
                router.push("/");
                setLoading(false);
            }
        };

        checkAuth();
    }, [router]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p>Loading...</p>
            </div>
        );
    }

    return isAuthenticated ? children : null;
}