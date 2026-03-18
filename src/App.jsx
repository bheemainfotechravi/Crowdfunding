import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import CodeOfPractice from "./pages/CodeOfPractice";
import Contact from "./pages/Contact";
import StartFundraiser from "./pages/StartFundraiser";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/code-of-practice" element={<CodeOfPractice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/start-fundraiser" element={<StartFundraiser />} />
        <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register/>} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;