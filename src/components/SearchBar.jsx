import React from 'react'
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto pt-12">
          <h1 className="text-4xl font-bold ">
            Start a Fundraiser for Any Cause You Care About
          </h1>
          <p className="text-gray-700 mt-6 text-center max-w-xl mx-auto text-xl">
            Join thousands who have successfully raised funds for medical emergencies, memorials, education, and other important causes on India's most trusted platform.
          </p>

          {/* Search */}
          <div className="flex items-center mt-8 bg-white rounded-full shadow px-6 py-2">
            <input
              type="text"
              placeholder="Search by fundraiser name, title..."
              className="w-full outline-none px-3"
            />

            <div className="bg-pink-800 p-3 rounded-full cursor-pointer flex items-center justify-center">
              <Search className="text-white" size={18} />
            </div>
          </div>
        </div>
        </div>
  )
}

export default SearchBar
