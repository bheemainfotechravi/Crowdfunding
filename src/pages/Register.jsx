import React, { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // CLOSE BUTTON FUNCTION
  const handleClose = () => {
    navigate("/"); // redirect to home (you can change route)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#8b2c3f] px-4 py-10">

      {/* MAIN CARD */}
      <div className="w-full max-w-6xl min-h-[530px] bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">

        {/* LEFT SIDE */}
        <div className="hidden md:flex w-1/2 bg-[#f8f8f8] flex-col items-center justify-center p-10 border-r">
          <div className="w-24 h-24 bg-[#8b2c3f] rounded-full flex items-center justify-center text-white text-4xl font-bold">
            ❤
          </div>

          <h2 className="mt-6 text-xl font-semibold text-gray-800 text-center">
            Welcome to crowdfunding
          </h2>

          <p className="text-sm text-gray-500 mt-2 text-center max-w-xs">
            India's largest crowdfunding platform to help people in need.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 relative flex flex-col justify-center">

          {/* CLOSE BUTTON */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-black transition"
          >
            <X size={22} />
          </button>

          <h2 className="text-center text-gray-600 text-sm mb-8">
            Sign up & manage fundraisers, donations & more
          </h2>

          {/* FORM */}
          <form className="space-y-6">

            {/* FULL NAME */}
            <div>
              <input
                type="text"
                placeholder="Full name"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#8b2c3f] py-3 text-sm"
              />
            </div>

            {/* EMAIL */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#8b2c3f] py-3 text-sm"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#8b2c3f] py-3 pr-10 text-sm"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-3 cursor-pointer text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#8b2c3f] text-white py-3 rounded-full font-semibold hover:bg-[#752636] transition"
            >
              Sign up
            </button>
          </form>

          {/* LOGIN LINK */}
          <div className="mt-8 text-center text-sm text-gray-500">
            Already signed up?{" "}
            <Link to="/login">
              <button className="bg-[#8b2c3f] text-white px-4 py-1 rounded-full ml-2">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;