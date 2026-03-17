import React from 'react'
import { Stethoscope, Heart, HandHeart, MoreHorizontal, ChevronDown } from 'lucide-react';

const Categaries = () => {
  return (

    <div className="flex flex-wrap justify-center gap-4 pt-12 font-semibold">

      <button className="flex items-center gap-3 px-5 py-2 border border-pink-200 rounded-lg bg-gray-50 shadow w-50 h-25  hover:border-pink-900 hover:scale-105 transition duration-300">

        <span className="bg-[#8b2c3f] p-2 rounded-full text-white">
          <Stethoscope size={18} />
        </span>
        Medical

      </button>

      <button className="flex items-center gap-3 px-5 py-2 border border-pink-200 rounded-lg bg-gray-50 shadow w-50 h-25  hover:border-pink-900 hover:scale-105 transition duration-300">

        <span className="bg-[#8b2c3f] p-2 rounded-full text-white">
          <Heart size={18} />
        </span>
        Memorials

      </button>

      <button className="flex items-center gap-3 px-5 py-2 border border-pink-200 rounded-lg bg-gray-50 shadow w-50 h-25 hover:border-pink-900 hover:scale-105 transition duration-300">

        <span className="bg-[#8b2c3f] p-2 rounded-full text-white">
          <HandHeart size={18} />
        </span>
        Non-profits

      </button>

      <button className="flex items-center gap-4 px-6 py-4 border border-pink-200 rounded-lg bg-gray-50 shadow w-50 h-25 hover:border-pink-900 hover:scale-105 transition duration-300">

        {/* Icon with badge */}
        <div className="relative">

          {/* Main circle */}
          <div className="bg-[#8b2c3f] p-3 rounded-full text-white shadow-md">
            <MoreHorizontal size={20} />
          </div>

          {/* Top-right badge */}
          <div className="absolute -top-1 -right-1 bg-pink-700 p-1 rounded-full text-white">
            <ChevronDown size={12} />
          </div>

        </div>

        {/* Text section */}
        <div className="flex flex-col">
          <span className="font-semibold">Others</span>
          <span className="text-xs text-gray-500">View all categories</span>
        </div>

      </button>

    </div>
  )
}

export default Categaries
