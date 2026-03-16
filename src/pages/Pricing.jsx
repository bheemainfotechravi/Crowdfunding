import React from "react";

const Pricing = () => {
  return (
    <div className="max-w-6xl mx-auto p-10 text-center">

      <h1 className="text-3xl font-bold mb-6">Pricing</h1>

      <p className="text-gray-600 mb-8">
        Our platform charges minimal fees to maintain transparency
        and support campaign creators.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="border p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">Starter</h2>
          <p className="text-gray-500">0% Platform Fees</p>
        </div>

        <div className="border p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">Standard</h2>
          <p className="text-gray-500">Small processing fee</p>
        </div>

        <div className="border p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">Premium</h2>
          <p className="text-gray-500">Advanced campaign tools</p>
        </div>

      </div>

    </div>
  );
};

export default Pricing;