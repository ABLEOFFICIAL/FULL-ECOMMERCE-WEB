import React, { useContext, useEffect, useState } from "react";
import search from "../../assets/Vector.png";
import { useProducts } from "../../App";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Context } from "../../context/Context";
export default function Search() {
  // const [searchValue, setSearchValue] = useState("");
  const Products = useProducts();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { display, setDisplay, searchValue, setSearchValue } =
    useContext(Context);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    // Filter products by name match
    const filtered = Products.filter((p) =>
      p.name.toLowerCase().includes(value.toLowerCase())
    );

    setDisplay(filtered);
    navigate("/products");
  };

  return (
    <span className="relative">
      <input
        type="search"
        name="search"
        value={searchValue}
        onChange={handleSearch}
        autoComplete="off"
        placeholder="What are you looking for?"
        className="w-[243px] h-[38px] bg-[#F5F5F5] rounded-sm px-4 text-sm focus:outline-none"
      />
      <span className="absolute top-0 right-0 bottom-0 flex justify-center items-center px-5">
        <img src={search} className="md:w-4 md:h-4 h-3 w-3" />
      </span>
    </span>
  );
}
