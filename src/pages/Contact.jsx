import React from "react";

const Contact = () => {
  return (
    <div className="max-w-xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <form className="space-y-4">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
        />

        <textarea
          placeholder="Message"
          rows="4"
          className="w-full border p-3 rounded"
        />

        <button className="bg-[#8b2c3f] text-white px-6 py-3 rounded-full">
          Send Message
        </button>

      </form>

    </div>
  );
};

export default Contact;