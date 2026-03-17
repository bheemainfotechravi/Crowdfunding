import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ProtectedAdminRoute from "./ProtectedAdminRoute";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main App (Public) */}
        <Route path="/*" element={<App />} />

        {/* Admin Login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;