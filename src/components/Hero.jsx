import React from "react";
import { HeartPulse, GraduationCap, Rocket, AlertTriangle, HandHeart } from "lucide-react";

const categories = [
  { name: "Medical", icon: <HeartPulse size={22} /> },
  { name: "Education", icon: <GraduationCap size={22} /> },
  { name: "Startup", icon: <Rocket size={22} /> },
  { name: "Emergency", icon: <AlertTriangle size={22} /> },
  { name: "NGO Projects", icon: <HandHeart size={22} /> },
];

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-center">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6"
          alt="crowdfunding"
          className="w-full h-full object-cover"
        />

        {/* Overlay with brand color */}
        <div className="absolute inset-0 bg-[#691a47]/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 text-white">

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
          Raise Funds for What Matters
        </h1>

        <p className="text-lg md:text-xl mb-8 text-gray-200 animate-fade-up delay-200">
          Start a fundraiser for medical help, education, startup ideas and more.
        </p>

        {/* Button */}
        <button className="bg-white text-[#691a47] hover:bg-gray-200 px-8 py-3 rounded-lg font-semibold transition animate-fade-up delay-300">
          Start a Fundraiser
        </button>

        {/* Categories */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 animate-fade-up delay-500">

          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-3 rounded-full border border-white/30 hover:bg-white hover:text-[#691a47] transition cursor-pointer transform hover:scale-105"
            >
              {cat.icon}
              <span className="font-medium">{cat.name}</span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Hero;