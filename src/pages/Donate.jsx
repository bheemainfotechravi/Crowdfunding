import React from "react";

const fundraisers = [
  {
    id: 1,
    title: "Help Child for Surgery",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    raised: "₹45,000",
    goal: "₹1,00,000",
  },
  {
    id: 2,
    title: "Support Education",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    raised: "₹30,000",
    goal: "₹80,000",
  },
  {
    id: 3,
    title: "Medical Emergency",
    image: "https://images.unsplash.com/photo-1580281657527-47c5c6c7a53c",
    raised: "₹60,000",
    goal: "₹1,50,000",
  },
];

const Fundraisers = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Browse Fundraisers</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {fundraisers.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-cover rounded-t-lg"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>

              <p className="text-sm text-gray-500 mb-2">
                Raised {item.raised} of {item.goal}
              </p>

              <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
                Donate Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fundraisers;