import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import cart from "../../assets/Cart1.png";
import search from "../../assets/Vector.png";
import { showSideBar } from "../../store/contextSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Menu() {
  const dispatch = useDispatch();
  const sideBar = useSelector((state) => state.context.sideBar);
  console.log(sideBar);

  return (
    <div className="flex md:hidden items-center gap-4">
      <img src={cart} className="md:w-8 w-6" />
      <img src={search} className="w-4" />
      <GiHamburgerMenu onClick={() => dispatch(showSideBar())} size={23} />
    </div>
  );
}
