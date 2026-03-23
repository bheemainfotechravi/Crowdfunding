import React, { useEffect, useState } from "react";
import axiosInstance from ".././api/axiosInstance";
import { Stethoscope, Heart, HandHeart, MoreHorizontal } from "lucide-react";

const Categaries = () => {
  const [categories, setCategories] = useState([]);

  // 🔥 Fetch API
  const getCategories = async () => {
    try {
      const res = await axiosInstance.get("/admin/category/get");

      if (res.data.success) {
        setCategories(res.data.data);
      }
    } catch (error) {
      console.log("API Error:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  // 🔥 Icon Mapping (optional)
  const getIcon = (name) => {
    switch (name.toLowerCase()) {
      case "medical":
        return <Stethoscope size={18} />;
      case "memorials":
        return <Heart size={18} />;
      case "non-profits":
        return <HandHeart size={18} />;
      default:
        return <MoreHorizontal size={18} />;
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 pt-12 font-semibold">
      
     {categories.map((cat) => (
  <button
    key={cat.id}
    className="flex items-center gap-3 px-5 py-2 border border-pink-200 rounded-lg bg-gray-50 shadow w-50 h-25 hover:border-pink-900 hover:scale-105 transition duration-300"
  >
    <span className="bg-[#8b2c3f] p-2 rounded-full text-white flex items-center justify-center">
      
      {cat.image ? (
        <img
          src={`${axiosInstance.defaults.baseURL.replace("/api", "")}/uploads/${cat.image}`}
          alt={cat.category_name}
          className="w-6 h-6 object-cover rounded-full"
        />
      ) : (
        getIcon(cat.category_name)
      )}

    </span>

    {cat.category_name}
  </button>
))}

      {/* Static Others Button */}
      <button className="flex items-center gap-4 px-6 py-4 border border-pink-200 rounded-lg bg-gray-50 shadow w-50 h-25 hover:border-pink-900 hover:scale-105 transition duration-300">
        <span className="bg-[#8b2c3f] p-3 rounded-full text-white">
          <MoreHorizontal size={20} />
        </span>

        <div className="flex flex-col">
          <span className="font-semibold">Others</span>
          <span className="text-xs text-gray-500">View all categories</span>
        </div>
      </button>

    </div>
  );
};

export default Categaries;