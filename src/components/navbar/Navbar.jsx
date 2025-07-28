import React from "react";
import Logo from "./Logo";
import PageSlide from "./PageSlide";
import Search from "./Search";
import Icons from "./Icons";
import Menu from "./Menu";
import AccountModal from "../../pages/home/AccountModal";

const Navbar = () => {
  return (
    <div className=" border-b-[1px] border-b-neutral-600/50 md:px-8 lg:px-0 ">
      <div className="container flex justify-between py-7 px-5 md:px-0 relative">
        <Logo />
        <PageSlide />
        <div className="lg:flex w-[395px] justify-between hidden">
          <Search />
          <Icons />
        </div>
        <Menu />
        <AccountModal />
      </div>
    </div>
  );
};

export default Navbar;
