import React from "react";
import search from "../../assets/Vector.png";
export default function Search() {
  return (
    <span className="relative">
      <input
        type="search"
        name="search"
        placeholder="What are you looking for?"
        className="w-[243px] h-[38px] bg-[#F5F5F5] rounded-sm px-4 text-sm"
      />
      <span className="absolute top-0 right-0 bottom-0 flex justify-center items-center px-5">
        <img src={search} className="md:w-4 md:h-4 h-3 w-3" />
      </span>
    </span>
  );
}
