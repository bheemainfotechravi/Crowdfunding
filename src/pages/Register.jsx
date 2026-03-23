import React, { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { loginUser } = useAuth();
  const [touched, setTouched] = useState({});

  // FORM STATE
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleBlur = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // VALIDATION FUNCTION
  const validate = () => {
    let newErrors = {};

    // FULL NAME
    if (!formData.full_name) {
      newErrors.full_name = "Full name is required";
    } else if (
      formData.full_name.length < 3 ||
      formData.full_name.length > 52
    ) {
      newErrors.full_name = "Name must be between 3 to 52 characters";
    }

    // EMAIL
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // PASSWORD (strong)
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must include uppercase, lowercase, number & special character";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) {
    toast.error("Please fix the errors in the form");
    return;
  }

  try {
    setLoading(true);

    const res = await axiosInstance.post("/user/register", formData);

    loginUser({
      full_name: formData.full_name,
      email: formData.email,
    });

    toast.success(res.data.message); // ✅ success toast

    navigate("/");

  } catch (error) {
    toast.error(
      error?.response?.data?.message || "Something went wrong"
    ); // ❌ error toast
  } finally {
    setLoading(false);
  }
};

  // CLOSE BUTTON
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
            Welcome to crowdfunding
          </h2>

          <p className="text-sm text-gray-500 mt-2 text-center max-w-xs">
            India's largest crowdfunding platform to help people in need.
          </p>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 relative flex flex-col justify-center">

          {/* CLOSE */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-black"
          >
            <X size={22} />
          </button>

          <h2 className="text-center text-gray-600 text-sm mb-8">
            Sign up & manage fundraisers, donations & more
          </h2>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* FULL NAME */}
            <div>
              <input
                type="text"
                name="full_name"
                placeholder="Full name"
                value={formData.full_name}
                onChange={handleChange}
                className={`w-full border-b py-3 text-sm ${errors.full_name ? "border-red-500" : "border-gray-300"
                  }`}
              />


              {errors.full_name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.full_name}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border-b py-3 text-sm ${errors.email ? "border-red-500" : "border-gray-300"
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
                className={`w-full border-b py-3 pr-10 text-sm ${errors.password ? "border-red-500" : "border-gray-300"
                  }`}
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-3 cursor-pointer"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>

              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#8b2c3f] text-white py-3 rounded-full font-semibold"
            >
              {loading ? "Signing up..." : "Sign up"}
            </button>
          </form>

          {/* LOGIN */}
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