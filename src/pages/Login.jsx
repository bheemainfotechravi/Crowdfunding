import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <div className="bg-white p-8 rounded-lg shadow w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        <form className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded"
          />

          <button className="w-full bg-[#8b2c3f] text-white py-3 rounded-full">
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;