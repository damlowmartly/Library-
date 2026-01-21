import { useState } from "react";

export default function Header({ onNavigate }) {
  const [searchPlaceholder, setSearchPlaceholder] =
    useState("Search topics...");

  return (
    <header className="bg-[#191970] py-4 px-4 flex flex-grid items-center shadow-md relative justify-between">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-1 text-center pl-3">
        LearnLibrary 📚
      </h1>

      {/* Search Bar */}
      <div className="relative w-full max-w-xl">
        <input
          type="text"
          placeholder={searchPlaceholder}
          className="w-full pl-4 pr-4 py-2 md:py-3 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2
           focus:ring-gray-400 transition 
           shadow-sm hover:shadow-md"
          onFocus={() => setSearchPlaceholder("")}
          onBlur={() => setSearchPlaceholder("Search topics...")}
        />

        {/* Search Suggestions Dropdown (hidden for now) */}
        <div className="absolute top-full left-0 right-0 bg-white border border-blue-400 rounded-lg mt-2 max-h-60 overflow-y-auto shadow-lg hidden">
          <div className="p-3 cursor-pointer hover:bg-blue-100 transition">
            Algebra
          </div>
          <div className="p-3 cursor-pointer hover:bg-blue-100 transition">
            Geometry
          </div>
          <div className="p-3 cursor-pointer hover:bg-blue-100 transition">
            Calculus
          </div>
        </div>
      </div>
    </header>
  );
}
