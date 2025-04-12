"use client";
import { useState } from "react";
import DashboardActionCard from "../components/DashboardActionCard";
import ProtectedRoute from "../components/protectedRoute";
import { Database, FileText, ChartNoAxesCombined } from "lucide-react";
import CategoryModal from "../components/CategoryModal";
import ItemModal from "../components/ItemModal";
import ChartModal from "../components/ChartModal";
import Modal from "../components/Modal";
export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(null);

  const handleAddCollection = (category, items) => {
    console.log("🆕 Collection:", category);
    console.log("📄 Documents:", items);
    // هنا تضيف الكوليشكن في Firebase
  };
  return (
    <ProtectedRoute>
      <div className="flex justify-between gap-5 m-5 flex-wrap">
        {/* <Products /> */}
        <DashboardActionCard
          icon={<Database className="w-5 h-5 text-white" />}
          title="Add New Category"
          quantity="7 Collections"
          onClick={() => setIsModalOpen(1)}
        />

        <DashboardActionCard
          icon={<FileText className="w-5 h-5 text-white" />}
          title="Add New Row"
          quantity="235 documents"
          onClick={() => setIsModalOpen(2)}
        />
        <DashboardActionCard
          icon={<ChartNoAxesCombined className="w-5 h-5 text-white" />}
          title="Add New Chart"
          quantity="5 Charts"
          onClick={() => setIsModalOpen(3)}
        />
        <div>
          {isModalOpen == 1 && (
            <Modal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
              <CategoryModal />
            </Modal>
          )}
          {isModalOpen == 2 && (
            <Modal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
              <ItemModal />
            </Modal>
          )}
          {isModalOpen == 3 && (
            <Modal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
              <ChartModal />
            </Modal>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
