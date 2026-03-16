import React from 'react'
import { Search, Heart } from "lucide-react";

const Categaries = () => {
  return (

    <div className="flex flex-wrap justify-center gap-4 pt-12">
          <button className="px-5 py-2 border rounded-lg bg-white shadow w-50 h-50 hover:bg-pink-50">
            ❤️ Medical
          </button>

          <button className="px-5 py-2 border rounded-lg bg-white shadow hover:bg-pink-50">
            💝 Memorials
          </button>

          <button className="px-5 py-2 border rounded-lg bg-white shadow hover:bg-pink-50">
            🏥 Non-profits
          </button>

          <button className="px-5 py-2 border rounded-lg bg-white shadow hover:bg-pink-50">
            ➕ Others
          </button>
        </div>
  )
}

export default Categaries
