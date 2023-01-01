import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <div className="md:flex hidden items-center flex-initial w-1/2 justify-between h-full border border-gray-300 bg-gray-100 rounded-full space-x-2 px-3 hover:border-blue-500">
      {/* search icon */}
      <MagnifyingGlassIcon className="h-6 w-6 text-blue-500" />
      <input
        className="bg-inherit w-full ring-0 outline-0 h-full rounded-full border-none text-md font-thin text-slate-500 px-2"
        placeholder="Search Redit..."
      />
    </div>
  );
};

export default SearchBar;
