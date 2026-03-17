import React from "react";
import { PhoneCall } from "lucide-react";

const HelpBanner = () => {
  return (
    // 👉 Full width background
    <section className="w-full bg-[#8b2c3f] py-12 md:py-10 mt-10">
      
      {/* 👉 Centered content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">

        <div className="flex flex-col md:flex-col items-center justify-between  gap-6 text-center md:text-left">
          
          {/* Text */}
          <h1 className="text-white text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold leading-snug">
            Need help to setup your free fundraiser?
          </h1>

          {/* Button */}
          <button className="
            flex items-center gap-2 
            bg-white text-pink-800 
            px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 
            rounded-full font-medium 
            text-xs sm:text-sm md:text-base 
            hover:scale-105 hover:bg-gray-100 
            transition-all duration-300
          ">
            <PhoneCall size={16} />
            Request a call
          </button>
        </div>

      </div>
    </section>
  );
};

export default HelpBanner;