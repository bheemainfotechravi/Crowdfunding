import React, { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const { loginUser } = useAuth();

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // VALIDATION
  const validate = () => {
    let newErrors = {};

    // EMAIL
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // PASSWORD
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT LOGIN
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) {
    toast.error("Please fix the errors in the form");
    return;
  }

  try {
    setLoading(true);

    const res = await axiosInstance.post("/user/login", formData);

    // store token
    localStorage.setItem("userToken", res.data.token);

    // store user
    loginUser(res.data.user);

    toast.success(res.data.message); // ✅ success toast

    navigate("/");

  } catch (error) {
    toast.error(
      error?.response?.data?.message || "Login failed"
    ); // ❌ error toast
  } finally {
    setLoading(false);
  }
};

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#8b2c3f] px-4 py-10">
      <div className="w-full max-w-6xl min-h-[530px] bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">

        {/* LEFT */}
        <div className="hidden md:flex w-1/2 bg-[#f8f8f8] flex-col items-center justify-center p-10 border-r">
          <div className="w-24 h-24 bg-[#8b2c3f] rounded-full flex items-center justify-center text-white text-4xl font-bold">
            ❤
          </div>

          <h2 className="mt-6 text-xl font-semibold text-gray-800 text-center">
            Welcome Back
          </h2>

          <p className="text-sm text-gray-500 mt-2 text-center max-w-xs">
            Login to manage your fundraisers and donations easily.
          </p>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 relative flex flex-col justify-center">

          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-black"
          >
            <X size={22} />
          </button>

          <h2 className="text-center text-gray-600 text-sm mb-8">
            Login & continue your journey
          </h2>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* EMAIL */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border-b py-3 text-sm focus:outline-none ${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-[#8b2c3f]"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full border-b py-3 pr-10 text-sm focus:outline-none ${
                  errors.password
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-[#8b2c3f]"
                }`}
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-3 cursor-pointer text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>

              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            {/* FORGOT PASSWORD */}
            <div className="text-right text-sm">
              <Link to="/forgot-password" className="text-[#8b2c3f]">
                Forgot Password?
              </Link>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#8b2c3f] text-white py-3 rounded-full font-semibold"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* REGISTER */}
          <div className="mt-8 text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <Link to="/register">
              <button className="bg-[#8b2c3f] text-white px-4 py-1 rounded-full ml-2">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;