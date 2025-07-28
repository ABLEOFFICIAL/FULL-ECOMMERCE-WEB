import React from "react";
import iphone from "../../assets/hero_endframe__cvklg0xk3w6e_large 2.png";
import apple from "../../assets/1200px-Apple_gray_logo 1.png";
import circle from "../../assets/Ellipse 7.png";
import circle2 from "../../assets/Group 1000005940.png";
import { Link } from "react-router-dom";
import img1 from "../../assets/Ellipse 7.png";
import img2 from "../../assets/Group 1000005940.png";
import CategoryLayout from "../../components/CategoryLayout";

export const CategorySide = () => {
  const Categories = [
    { category: "Woman’s Fashion >", list: ["dress", "Jewelry", "makeup"] },
    { category: "Men's Fashion >", list: ["wrist watch", "wallet", "shoe"] },
    { category: "Electronics" },
    { category: "Home & Lifestyle" },
    { category: "Medicine" },
    { category: "Sports & Outdoor" },
    { category: "Baby’s & Toys" },
    { category: "Groceries & Pets" },
    { category: "Health & Beauty" },
  ];

  const handleCategory = () => {
    console.log("hello");
  };

  return (
    <div className="border-r-[1px] border-neutral-600/50 hidden lg:block">
      <span className="flex flex-col gap-4 pr-6 mt-6 md:pr-4 md:mt-4">
        {Categories.map((item, idx) => (
          <button onClick={handleCategory} key={idx} className="text-start">
            <p className="text-sm md:text-base">{item.category}</p>
          </button>
        ))}
      </span>
    </div>
  );
};

const Section1 = () => {
  return (
    <div>
      <div className="container flex justify-between flex-col md:flex-row">
        {/* Sidebar */}
        <CategoryLayout />
        {/* Main Banner */}
        <div className="max-w-[892px] w-full h-[80vh] md:h-[400px] lg:h-[344px] bg-black flex flex-col gap-12 md:gap-0 md:flex-row mt-0 md:mt-6 lg:mt-10 relative z-0">
          {/* Text */}
          <div className="text-white w-full md:w-1/2 flex flex-col justify-between p-6 md:p-8 lg:p-10 gap-3 md:gap-5">
            <span className="flex items-center gap-3 md:gap-4 mx-auto md:mx-0">
              <img src={apple} alt="Apple Logo" className="w-5 md:w-6" />
              <p className="medium text-sm md:text-base">iPhone 14 Series</p>
            </span>
            <h1 className="text-center md:text-left text-xl md:text-2xl lg:text-3xl">
              Up to 10% off Voucher
            </h1>
            <Link to={"/shop"} className="mx-auto md:mx-0">
              <p className="mediump py-1 border-b-[1px] border-b-white inline text-sm md:text-base">
                Shop Now
              </p>
            </Link>
          </div>

          {/* Image */}
          <img
            src={iphone}
            alt="iPhone"
            className="w-[300px] md:w-[360px] lg:w-[496px] object-contain mx-auto md:mx-0"
          />

          {/* Indicators */}
          <div className="absolute bottom-4 w-full">
            <div className="flex items-center gap-2 mx-auto w-[110px]">
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
