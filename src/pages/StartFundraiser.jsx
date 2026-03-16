import React from "react";

const StartFundraiser = () => {
  return (
    <div className="max-w-3xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-6">
        Start a Fundraiser
      </h1>

      <form className="space-y-4">

        <input
          type="text"
          placeholder="Fundraiser Title"
          className="w-full border p-3 rounded"
        />

        <input
          type="number"
          placeholder="Goal Amount"
          className="w-full border p-3 rounded"
        />

        <textarea
          placeholder="Describe your fundraiser"
          rows="4"
          className="w-full border p-3 rounded"
        />

        <input type="file" className="w-full border p-3 rounded" />

        <button className="bg-[#8b2c3f] text-white px-6 py-3 rounded-full">
          Create Fundraiser
        </button>

      </form>

    </div>
  );
};

export default StartFundraiser;