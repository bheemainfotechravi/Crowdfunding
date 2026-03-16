import React from "react";
import { Heart } from "lucide-react";

const CategariesCards = () => {

  const fundraisers = [
    {
      id: 1,
      title: "Urgent Support Needed for Giridhar's Life-Saving treatment",
      raised: "₹3,91,700",
      goal: "₹10,00,000",
      supporters: "305 supporters",
      image:
        "https://images.unsplash.com/photo-1588776814546-ec7e2a6b9d4b",
    },
    {
      id: 2,
      title: "Help my son to fight from rare immune disease",
      raised: "₹14,806",
      goal: "₹5,00,000",
      supporters: "887 supporters",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    },
    {
      id: 3,
      title: "Urgent Help Needed for 7-Year-Old Baby's Kidney Transplant",
      raised: "₹18,54,501",
      goal: "₹20,00,000",
      supporters: "1416 supporters",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
      {fundraisers.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow hover:shadow-lg transition"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover rounded-t-xl"
          />

          <div className="p-4">
            <h2 className="font-semibold text-lg">{item.title}</h2>

            <div className="mt-3">
              <p className="text-pink-600 font-semibold">
                Raised: {item.raised}
              </p>

              <div className="w-full bg-gray-200 h-2 rounded mt-2">
                <div className="bg-green-500 h-2 rounded w-3/4"></div>
              </div>

              <p className="text-sm text-gray-500 mt-2">
                Goal: {item.goal}
              </p>
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-gray-500">
                {item.supporters}
              </p>

              <Heart className="text-gray-400 cursor-pointer" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategariesCards;