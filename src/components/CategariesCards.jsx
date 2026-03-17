import React from "react";
import { Heart, IndianRupee, User, Share2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CategariesCards = () => {

  const fundraisers = [
    {
      id: 1,
      heading: "Medical Emergency",
      title: "Help Giridhar Fight Critical Illness",
      raised: 391700,
      goal: 1000000,
      createdBy: "Ramesh Kumar",
      supporters: "305 supporters",
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c"
    },
    {
      id: 2,
      heading: "Heart Surgery",
      title: "Support Anjali's Urgent Heart Surgery",
      raised: 520000,
      goal: 800000,
      createdBy: "Neha Sharma",
      supporters: "420 supporters",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289"
    },
    {
      id: 3,
      heading: "Cancer Treatment",
      title: "Help Rajesh in His Cancer Treatment Journey",
      raised: 210000,
      goal: 600000,
      createdBy: "Amit Verma",
      supporters: "180 supporters",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309"
    },
    {
      id: 4,
      heading: "Kidney Transplant",
      title: "Urgent Help Needed for Suresh’s Kidney Transplant",
      raised: 670000,
      goal: 1200000,
      createdBy: "Pooja Singh",
      supporters: "510 supporters",
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c"
    },
    {
      id: 5,
      heading: "Accident Recovery",
      title: "Support Ravi After a Serious Road Accident",
      raised: 150000,
      goal: 500000,
      createdBy: "Karan Patel",
      supporters: "120 supporters",
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c"
    },
    {
      id: 6,
      heading: "Child Treatment",
      title: "Help Baby Aarav Recover from Rare Disease",
      raised: 300000,
      goal: 700000,
      createdBy: "Sneha Gupta",
      supporters: "260 supporters",
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b"
    },
    {
      id: 7,
      heading: "Brain Surgery",
      title: "Support Meena’s Critical Brain Surgery",
      raised: 450000,
      goal: 900000,
      createdBy: "Vikas Yadav",
      supporters: "350 supporters",
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c"
    },
    {
      id: 8,
      heading: "ICU Support",
      title: "Help Sunita Fight for Her Life in ICU",
      raised: 280000,
      goal: 650000,
      createdBy: "Anil Sharma",
      supporters: "210 supporters",
      image: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957"
    }
  ];

    const scrollRef = useRef();

  // Auto scroll every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 300,
          behavior: "smooth",
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Manual scroll
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

   return (
    <div className="relative max-w-6xl mx-auto mt-10">

      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-500 text-white p-2 rounded-full"
      >
        <ChevronLeft />
      </button>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {fundraisers.map((item) => {
          const percent = (item.raised / item.goal) * 100;

          return (
            <div
              key={item.id}
              className="min-w-[300px] bg-white rounded-xl border border-transparent 
              hover:border-pink-900 hover:shadow-md hover:-translate-y-1 transition"
            >
              {/* 👉 SAME TERA CARD CODE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />

              <div className="p-4">
                <h1 className="font-bold text-xl">{item.heading}</h1>
                <h2 className="text-base font-semibold text-gray-700">
                  {item.title}
                </h2>

                <div className="flex justify-between items-center mt-3">
                  <p className="flex items-center gap-1 text-pink-900 px-2 py-1 rounded-md font-semibold text-xl">
                    Raised:
                    <IndianRupee size={14} />
                    {item.raised}
                  </p>

                  <p className="text-sm text-gray-500">
                    Goal: ₹{item.goal}
                  </p>
                </div>

                <div className="w-full bg-gray-200 h-2 rounded mt-2 overflow-hidden">
                  <div
                    className="bg-green-500 h-2 rounded"
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>

                <p className="flex items-center gap-2 text-sm text-gray-500 mt-3">
                  <div className="bg-gray-500 p-2 rounded-full">
                    <User className="text-white" size={16} />
                  </div>
                  Created by: {item.createdBy}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <button className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                    {item.supporters}
                  </button>

                  <div className="bg-gray-500 p-2 rounded-full">
                    <Share2 className="text-white" size={16} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-500 text-white p-2 rounded-full"
      >
        <ChevronRight />
      </button>
    </div>


  );
};

export default CategariesCards;