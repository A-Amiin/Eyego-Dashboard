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
export const db = getFirestore(app);

export const registerWithEmail = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return { uid: userCredential.user.uid, email: userCredential.user.email };
    } catch (error) {
        console.error("Registration error:", error.message);
        throw new Error(error.message);
    }
};

export const loginWithEmail = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return { uid: user.uid, email: user.email, token: await user.getIdToken() };
    } catch (error) {
        console.error("Login error:", error.message);
        throw new Error("Invalid email or password");
    }
};

export const logoutUser = async () => {
    try {
        await signOut(auth);
        console.log("User logged out successfully");
    } catch (error) {
        console.error("Logout error:", error.message);
        throw new Error(error.message);
    }
};