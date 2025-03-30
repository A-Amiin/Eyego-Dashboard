"use client";

import { useState } from "react";
import { auth, signOut, loginWithEmail } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function AuthComponent() {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const handleLogin = async () => {
        try {
            await loginWithEmail(email, password);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4 p-4 border rounded shadow-md">
            {user ? (
                <>
                    <p> Welcome {user.email}</p>
                    <button onClick={() => signOut(auth)} className="bg-red-500 text-white px-4 py-2 rounded"> Sign Out</button>
                </>
            ) : (
                <>
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border px-2 py-1"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border px-2 py-1"
                    />
                    <button onClick={handleLogin} className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
                </>
            )}
        </div>
    );
}