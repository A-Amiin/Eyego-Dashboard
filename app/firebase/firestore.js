import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function getProducts() {
    if (!db) {
        console.error("Firestore DB is not initialized!");
        return [];
    }

    try {
        const productsCollection = collection(db, "products");
        const querySnapshot = await getDocs(productsCollection);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}
