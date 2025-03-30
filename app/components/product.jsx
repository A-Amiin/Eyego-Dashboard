"use client";
import { useState, useEffect } from "react";
import { getProducts } from "../firebase/firestore";

export default function Product() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            {loading ? (
                <p>Loading...</p>
            ) : products.length > 0 ? (
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            {product.productName} - ${product.price}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No products available.</p>
            )}
        </div>
    );
}
