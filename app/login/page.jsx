"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authSlice";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const router = useRouter();

    const { loading, error } = useSelector((state) => state.auth);

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }))
            .unwrap()
            .then(() => {
                router.push("/dashboard");
            })
            .catch(() => { });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-600">
            <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg flex flex-col lg:flex-row">
                <div className="flex flex-col items-center justify-center space-y-6 w-full lg:w-1/2 p-6">
                    <h1 className="text-xl font-bold text-center text-slate-600">Hi Admin</h1>

                    {error && (
                        <Alert variant="destructive" className="w-full text-center">
                            <AlertTitle>⛔ Error</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    <form className="w-full" onSubmit={handleLogin}>
                        <div className="form-group my-3">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <p className="text-sm text-blue-500 mt-2 hover:underline cursor-pointer">
                            <a href="#">Forgot Password?</a>
                        </p>
                        <div className="flex justify-center mt-4">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
                                disabled={loading}
                            >
                                {loading ? "Logging in..." : "Login"}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="hidden lg:flex flex-col items-center justify-center w-1/2 p-6">
                    <img src="/login-img-card.png" alt="Background" className="w-full max-w-sm" />
                    <h3 className="text-l font-semibold mt-4 text-slate-600">Login To Enter The Dashboard page</h3>
                </div>
            </div>
        </div>
    );
};

export default Login;
