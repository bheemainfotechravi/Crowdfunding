import React, { useState, useRef, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const profileRef = useRef(null);
  const mobileProfileRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Donate", path: "/donate" },
    { name: "Pricing", path: "/pricing" },
    { name: "Resources", path: "/resources" },
    { name: "Code of Practice", path: "/code-of-practice" },
    { name: "Contact us", path: "/contact" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target) &&
        mobileProfileRef.current &&
        !mobileProfileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-[#f5f3f3] border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        
        {/* LOGO */}
        <Link to="/" className="font-bold text-xl text-[#8b2c3f]">
          Crowdfunding
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 text-gray-700">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="hover:text-[#8b2c3f] transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE (DESKTOP) */}
        <div className="hidden md:flex items-center gap-4 relative">
          
          {/* Start fundraiser */}
          <Link
            to="/start-fundraiser"
            className="bg-[#8b2c3f] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#752636] transition"
          >
            Start a fundraiser
          </Link>

          {/* PROFILE */}
          <div ref={profileRef} className="relative">
            <div
              onClick={() => setProfileOpen(!profileOpen)}
              className="border border-[#8b2c3f] p-2 rounded-full text-[#8b2c3f] cursor-pointer hover:bg-[#8b2c3f] hover:text-white transition"
            >
              <User size={20} />
            </div>

            {profileOpen && (
              <div className="absolute right-0 mt-3 w-44 bg-white shadow-xl rounded-lg p-4 z-50">
                <Link
                  to="/login"
                  className="block mb-2 text-gray-700 hover:text-[#8b2c3f]"
                  onClick={() => setProfileOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block text-gray-700 hover:text-[#8b2c3f]"
                  onClick={() => setProfileOpen(false)}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex items-center gap-4">
          
          {/* Mobile Profile */}
          <div ref={mobileProfileRef} className="relative">
            <User
              size={24}
              onClick={() => setProfileOpen(!profileOpen)}
              className="cursor-pointer text-[#8b2c3f]"
            />

            {profileOpen && (
              <div className="absolute right-0 mt-3 w-40 bg-white shadow-lg rounded-lg p-4 z-50">
                <Link
                  to="/login"
                  className="block mb-2"
                  onClick={() => setProfileOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block"
                  onClick={() => setProfileOpen(false)}
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* MENU BUTTON */}
          {menuOpen ? (
            <X size={26} onClick={() => setMenuOpen(false)} className="cursor-pointer" />
          ) : (
            <Menu size={26} onClick={() => setMenuOpen(true)} className="cursor-pointer" />
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
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-[#8b2c3f]"
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/start-fundraiser"
            className="block text-center bg-[#8b2c3f] text-white py-2 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Start a fundraiser
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;