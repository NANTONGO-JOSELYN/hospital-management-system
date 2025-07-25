import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-full sm:w-64 bg-white">
      <Search className="text-gray-400 w-5 h-5 mr-2" />
      <input
        type="text"
        placeholder={placeholder}
        className="outline-none w-full text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
