import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import cart from "../../assets/Cart1.png";
import search from "../../assets/Vector.png";

export default function Menu() {
  return (
    <div className="flex md:hidden items-center gap-4">
      <img src={cart} className="md:w-8 w-6" />
      <img src={search} className="w-4" />
      <GiHamburgerMenu size={23} />
    </div>
  );
}
