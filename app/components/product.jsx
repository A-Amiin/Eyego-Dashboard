"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/dataSlice";
import Image from "next/image";

export default function Product() {
    const dispatch = useDispatch();
    const { data = [], loading, error } = useSelector((state) => state.data);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const [sortType, setSortType] = useState(null);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const safeRender = (value) => {
        if (value === null || value === undefined) return "N/A";
        if (typeof value === 'object') return JSON.stringify(value);
        return value;
    };

    const sortedData = [...data].sort((a, b) => {
        if (sortType === "price") {
            return a.price - b.price;
        } else if (sortType === "sales") {
            return b.totalSales - a.totalSales;
        }
        return 0;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        if (currentPage < Math.ceil(data.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-sm w-full overflow-x-auto">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-gray-800">Products</h1>
                <p className="text-gray-500 text-sm">Manage your products and view their sales performance.</p>
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
                <button onClick={() => setSortType("price")} className="cursor-pointer px-3 py-1 bg-blue-500 text-white rounded">Sort by Price</button>
                <button onClick={() => setSortType("sales")} className="cursor-pointer px-3 py-1 bg-green-500 text-white rounded">Sort by Best Seller</button>
            </div>

            {loading && <p className="text-center py-4">Loading...</p>}
            {error && <p className="text-center py-4 text-red-500">Error: {error}</p>}

            {currentItems.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className=" border-collapse md:min-w-full">
                        <thead>
                            <tr className="border-b text-left text-gray-500 text-xs md:text-sm">
                                <th className="pb-3 pr-4 font-medium">Name</th>
                                <th className="pb-3 px-4 font-medium">Status</th>
                                <th className="pb-3 px-4 text-center font-medium">Price</th>
                                <th className="pb-3 px-4 text-center  font-medium">Total Sales</th>
                                <th className="pb-3 px-4 text-center font-medium">Created at</th>
                                <th className="text-center pb-3 pl-4 font-medium"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item, index) => (
                                <tr key={item.id || index} className="border-b hover:bg-gray-50 text-xs md:text-sm">
                                    <td className="py-4 flex items-center">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-md mr-3 overflow-hidden hidden md:flex">
                                            {item.image ? (
                                                <Image
                                                    src={item.image}
                                                    alt={safeRender(item.name)}
                                                    width={48}
                                                    height={48}
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gray-200"></div>
                                            )}
                                        </div>
                                        <span className="font-medium text-gray-800">{safeRender(item.name || item.productName)}</span>
                                    </td>


                                    <td className="py-4">
                                        <span className={`px-2 py-1 rounded text-xs font-medium ${item.status ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}>
                                            {item.status ? "Active" : "Inactive"}
                                        </span>
                                    </td>
                                    <td className="py-4 text-center text-gray-800">${typeof item.price === 'number' ? item.price.toFixed(2) : '0.00'}</td>
                                    <td className="py-4 text-center text-gray-800">{safeRender(item.totalSales) || 0}</td>
                                    <td className="text-center py-4 text-gray-500">{safeRender(item.createdAt) || "N/A"}</td>
                                    <td className="text-center py-4 pl-4 text-right">
                                        <button className="cursor-pointer text-gray-400 hover:text-gray-600">
                                            •••
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center py-8 text-gray-500">No products found.</p>
            )}

            <div className="mt-4 flex flex-wrap items-center justify-between text-xs md:text-sm text-gray-500">
                <p>Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, data.length)} of {data.length} products</p>
                <div className="flex items-center space-x-2">
                    <button onClick={prevPage} className="cursor-pointer px-2 py-1 border rounded text-gray-400 hover:bg-gray-50 disabled:opacity-50" disabled={currentPage === 1}>Prev</button>
                    <button onClick={nextPage} className="cursor-pointer px-2 py-1 border rounded hover:bg-gray-50" disabled={currentPage === Math.ceil(data.length / itemsPerPage)}>Next</button>
                </div>
            </div>
        </div>
    );
}
