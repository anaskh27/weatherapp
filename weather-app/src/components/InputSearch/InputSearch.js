import React from "react";

const InputSearch = () => {
  return (
    <div className="relative">
      <input
        type="text"
        color="white"
        placeholder=" Search..."
        className="w-full bg-transparent border-b text-white border-white-500 focus:outline-none focus:border-white-500 pl-8 pr-8 py-2 placeholder-white"
      />
      <div className="absolute right-3 top-0 mt-3 ml-3  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>
    </div>
  );
};

export default InputSearch;
