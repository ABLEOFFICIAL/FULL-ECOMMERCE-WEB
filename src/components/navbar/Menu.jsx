import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import cart from "../../assets/Cart1.png";
import search from "../../assets/Vector.png";
import { showSideBar } from "../../store/contextSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Like } from "./Icons";
import { CartImg } from "../../pages/cart/Cart";
import { IoSearch } from "react-icons/io5";

export default function Menu() {
  const dispatch = useDispatch();
  const sideBar = useSelector((state) => state.context.sideBar);
  console.log(sideBar);

  return (
    <div className="flex md:hidden items-center gap-4">
      <Link to={"/cart"}>
        <CartImg className="size-6 cursor-pointer" />
      </Link>
      <Link to={"/wishlist"}>
        <Like className={"bg-white size-8 p-1 rounded-full stroke-1 "} />{" "}
      </Link>
      <IoSearch className="size-6" />

      {/* <img src={search} className="w-4" /> */}
      <GiHamburgerMenu onClick={() => dispatch(showSideBar())} size={23} />
    </div>
  );
}
