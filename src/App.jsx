import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      <div className="bg-white shadow-lg rounded-xl p-8 w-[400px]">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          React Tailwind App
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Name"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Enter Email"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>

    </div>
  );
}

export default App;