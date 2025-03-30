"use client";

import { useState, useEffect } from "react";
import Login from "../app/login/page";
import Product from "../app/components/product";
import { auth } from "./firebase/firebase";
import { logoutUser } from "./redux/authSlice";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLogin(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      {isLogin ? (
        <>
          <h1>Hi There</h1>
          <p>Welcome</p>
          <Product />
          <button
            onClick={() => dispatch(logoutUser())}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Sign Out
          </button>
        </>
      ) : (
        <Login />
      )}
    </main>
  );
}

