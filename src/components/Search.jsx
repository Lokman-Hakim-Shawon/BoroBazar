
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="bg-[#E6E6E6] w-[600px] h-[50px] rounded-md px-4 relative">
      <input
        type="text"
        placeholder="Search for Products..."
        className="w-full h-full outline-none bg-[#E6E6E6]"
      />
      <button className="w-10 h-10 rounded-full flex items-center justify-center absolute top-[5px] right-2 z-50 cursor-pointer hover:bg-gray-300"><IoSearchOutline size={25} className=""/></button>

    </div>
  );
};

export default Search;
