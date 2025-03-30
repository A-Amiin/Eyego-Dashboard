import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBEvm-rs_811yWpbFERV4STvWiJ6ndpw3g",
    authDomain: "test-6a340.firebaseapp.com",
    projectId: "test-6a340",
    storageBucket: "test-6a340.firebasestorage.app",
    messagingSenderId: "279810396598",
    appId: "1:279810396598:web:596806ab349ab68d543117",
    measurementId: "G-SBD3J7Q4J1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const registerWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const loginWithEmail = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in:", userCredential.user);
        return userCredential;
    } catch (error) {
        console.error("Login error:", error.message);
        throw error;
    }
};

export const logout = async () => {
    try {
        await signOut(auth);
        console.log("User logged out");
    } catch (error) {
        console.error("Logout error:", error.message);
        throw error;
    }
};

export const db = getFirestore(app);
