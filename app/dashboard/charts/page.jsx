"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { fetchData } from "../../redux/dataSlice";

export default function ChartsPage() {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    useEffect(() => {
        console.log("Firebase products data:", data);
    }, [data]);

    if (loading) {
        return (
            <div className="p-6 flex justify-center items-center h-64">
                <p className="text-lg">Loading data from Firebase...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-6 bg-red-50 border border-red-400 text-red-700 rounded">
                <p>Error loading data: {error}</p>
                <button
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
                    onClick={() => dispatch(fetchData())}
                >
                    Retry
                </button>
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
            <div className="p-6 bg-yellow-50 border border-yellow-400 text-yellow-700 rounded">
                <p>No product data found in Firebase. Please add some products first.</p>
            </div>
        );
    }

    const salesData = data.map((product) => ({
        name: product.name || product.productName || "Unnamed Product",
        totalSales: Number(product.sales || product.totalSales || 0),
    }));

    const productsOverTime = data.reduce((acc, product) => {
        // Assume product.createdAt is already in 'YYYY-MM-DD' format
        let date = product.createdAt || "Unknown";
        acc[date] = (acc[date] || 0) + 1;
        return acc;
    }, {});

    const timeData = Object.keys(productsOverTime)
        .sort() // Sort dates chronologically
        .map((date) => ({
            date,
            count: productsOverTime[date],
        }));

    return (
        <div className="p-6 space-y-10">
            {/* Total Sales per Product Chart */}
            <div className="bg-white p-4 shadow rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Total Sales per Product</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={salesData}>
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="totalSales" fill="#4F46E5" barSize={40} radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Products Over Time Chart */}
            <div className="bg-white p-4 shadow rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Products Over Time</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={timeData}>
                        <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="count" stroke="#10B981" fill="#A7F3D0" strokeWidth={2} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}