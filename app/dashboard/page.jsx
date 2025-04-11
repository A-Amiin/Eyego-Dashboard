"use client";
import { useState } from "react";
import Products from "../components/product";
import CategoryModal from "../components/CategoryModal"
import DashboardActionCard from "../components/DashboardActionCard"
import ProtectedRoute from "../components/protectedRoute"
import { Database, FileText, ChartNoAxesCombined } from "lucide-react";
import ItemModal from "../components/ItemModal";
export default function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddCollection = (category, items) => {
        console.log("🆕 Collection:", category);
        console.log("📄 Documents:", items);
        // هنا تضيف الكوليشكن في Firebase
    };
    return (
        <ProtectedRoute>
            <div className="flex justify-around gap-10 m-8 flex-wrap">
                {/* <Products /> */}
                <DashboardActionCard
                    icon={<Database className="w-12 h-12" />}
                    title="Add New Category"
                    quantity="7 Collections"
                // onClick={() => setIsModalOpen(true)}
                />
                <DashboardActionCard
                    icon={<FileText className="w-12 h-12" />}
                    title="Add New Row"
                    quantity="235 documents"
                    onClick={() => setIsModalOpen(true)}
                />
                <DashboardActionCard
                    icon={<ChartNoAxesCombined className="w-12 h-12" />}
                    title="Add New Chart"
                    quantity="5 Charts"
                    onClick={() => console.log("Clicked Add Collection")}
                />
                <div>
                    {/* <CategoryModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onAddCollection={handleAddCollection}
                    /> */}
                    <ItemModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onAddCollection={handleAddCollection}
                    />
                </div>
            </div>
        </ProtectedRoute>
    );
}