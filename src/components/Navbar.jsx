import React, { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Donate", path: "/donate" },
    { name: "Pricing", path: "/pricing" },
    { name: "Resources", path: "/resources" },
    { name: "Code of Practice", path: "/code-of-practice" },
    { name: "Contact us", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-[#f5f3f3] border-b">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#8b2c3f]">
       
          Crowdfunding
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 text-gray-700">

          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`px-4 py-2 rounded ${
                item.name === "Home"
                 
              }`}
            >
              {item.name}
            </Link>
          ))}

        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-4">

          {/* Start fundraiser button */}
          <Link
            to="/start-fundraiser"
            className="bg-[#8b2c3f] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#752636] transition"
          >
            Start a fundraiser
          </Link>

          {/* Profile icon */}
          <div className="border border-[#8b2c3f] p-2 rounded-full text-[#8b2c3f] cursor-pointer">
            <User size={20} />
          </div>

        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          {menuOpen ? (
            <X size={26} onClick={() => setMenuOpen(false)} />
          ) : (
            <Menu size={26} onClick={() => setMenuOpen(true)} />
          )}
        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-6 space-y-4">

          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="block text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/start-fundraiser"
            className="block text-center bg-[#8b2c3f] text-white py-2 rounded-full"
          >
            Start a fundraiser
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;