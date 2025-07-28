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
  const wishlistCount = useSelector((state) => state.productsAuth.wishlist);
  const cartCount = useSelector((state) => state.productsAuth.cart);
  return (
    <div className="flex lg:hidden items-center gap-4">
      <div className="relative">
        <Link to={"/cart"}>
          <CartImg className="size-6 cursor-pointer" />
        </Link>
        <span className="absolute bg-[var(--red)] text-white p-[1px] px-[4px] text-[10px] rounded-full -top-2 -right-1 ">
          {wishlistCount.length}
        </span>
      </div>
      <div className="relative">
        <Link to={"/wishlist"}>
          <Like className={"bg-white size-8 p-1 rounded-full stroke-1 "} />
        </Link>
        <span className="absolute bg-[var(--red)] text-white p-[1px] px-[4px] text-[10px] rounded-full -top-1 -right-0 ">
          {wishlistCount.length}
        </span>
      </div>

      <IoSearch className="size-6" />

      <GiHamburgerMenu onClick={() => dispatch(showSideBar())} size={23} />
    </div>
  );
}
