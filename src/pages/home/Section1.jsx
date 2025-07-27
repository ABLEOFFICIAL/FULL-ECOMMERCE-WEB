import React from "react";
import iphone from "../../assets/hero_endframe__cvklg0xk3w6e_large 2.png";
import apple from "../../assets/1200px-Apple_gray_logo 1.png";
import circle from "../../assets/Ellipse 7.png";
import circle2 from "../../assets/Group 1000005940.png";
import { Link } from "react-router-dom";
import img1 from "../../assets/Ellipse 7.png";
import img2 from "../../assets/Group 1000005940.png";

const Section1 = () => {
  const Categories = [
    { category: "Woman’s Fashion >", list: ["dress", "Jewelry", "makeup"] },
    {
      category: "Men's Fashion >",
      list: ["wrist watch", "wallet", "shoe"],
    },
    { category: "Electronics" },
    { category: "Home & Lifestyle" },
    { category: "Medicine" },
    { category: "Sports & Outdoor" },
    { category: "Baby’s & Toys" },
    { category: "Groceries & Pets" },
    { category: "Health & Beauty" },
  ];
  return (
    <div>
      <div className="container flex  justify-between">
        <div className="border-r-[1px] border-neutral-600/50 hidden lg:block">
          <span className="flex flex-col gap-4  pr-10  mt-10 ">
            {Categories.map((item, idx) => {
              return (
                <p key={idx} className="">
                  {item.category}
                </p>
              );
            })}
          </span>
        </div>
        <div className="max-w-[892px] w-screen lg:h-[344px] h-[80vh] bg-black flex lg:flex-row flex-col lg:mt-10 mt-0 relative z-0   ">
          <div className="text-white lg:w-1/2 w-full flex flex-col justify-between p-10 lg:gap-5 gap-3">
            <span className="flex items-center gap-4 mx-auto lg:mx-0">
              <img src={apple} alt="" />
              <p className="medium">iPhone 14 Series</p>
            </span>
            <h1 className="text-center lg:text-left">Up to 10% off Voucher</h1>
            <Link to={"/shop"} className="mx-auto lg:mx-0">
              <p className="mediump py-1 border-b-[1px] border-b-white inline">
                Shop Now
              </p>
            </Link>
          </div>
          <img src={iphone} className="w[496px] " />
          <div className="absolute bottom-4 w-full">
            <div className=" flex items-center gap-2 mx-auto w-[110px] ">
              <img src={img1} alt="" />
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img1} alt="" />
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
