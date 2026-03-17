// components/admin/Navbar.jsx
import { Menu, ChevronDown, LogOut } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setSidebarOpen }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow px-4 py-3 flex items-center justify-between">
      
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          className="md:hidden text-[#9c3353]"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu />
        </button>
        <h2 className="text-lg font-semibold text-[#9c3353]">
          Admin Panel
        </h2>
      </div>

      {/* Right */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2"
        >
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
          <ChevronDown size={18} />
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden z-50">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-sm"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        )}
      </div>

    </header>
  );
};

export default Navbar;