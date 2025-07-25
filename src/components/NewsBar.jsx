import React from "react";

const NewsBar = () => {
  return (
    <div className=" bg-[var(--black)] text-[var(--white)] md:h-[48px] h-[48px]">
      <div className="container flex md:justify-between items-center h-full justify-center">
        <span className="w-10 h-10 hidden md:block"></span>
        <div className="items-center gap-2 hidden md:flex">
          <p className="smallp">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <p className="text-sm leading-[24px] font-semibold underline">
            Shop Now
          </p>
        </div>
        <div className="items-center gap-2 flex md:hidden h-full">
          <p className="smallp">Summer Sale For All Swim Suits-OFF 50%!</p>
          <p className="text-sm leading-[24px] font-semibold underline">
            Shop Now
          </p>
        </div>
        <select name="language" className="focus:outline-none hidden md:block">
          <option value="english">English</option>
          <option value="uk-english">Uk English</option>
          <option value="spanish">Spanish</option>
        </select>
      </div>
    </div>
  );
};

export default NewsBar;
