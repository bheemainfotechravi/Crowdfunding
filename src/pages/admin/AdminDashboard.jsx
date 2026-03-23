import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";

import AddCategory from "../../pages/admin/AddCategory";


const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        
        {/* Navbar */}
        <Navbar setSidebarOpen={setSidebarOpen} />

        {/* Page Content */}
        <main className="p-6 overflow-y-auto">
          <Routes>
            <Route path="dashboard" element={<h1 className="text-2xl font-semibold">Dashboard</h1>} />
            <Route path="category" element={<AddCategory />} />
      
          </Routes>
        </main>

      </div>
    </div>
  );
};

export default AdminDashboard;