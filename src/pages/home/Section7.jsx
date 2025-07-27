import React from "react";
import { Top } from "./Section2";
import img1 from "../../assets/ps5-slim-goedkope-playstation_large 1.png";
import img2 from "../../assets/attractive-woman-wearing-hat-posing-black-background 1.png";
import img3 from "../../assets/Frame 707.png";
import img4 from "../../assets/Frame 706.png";
import { Link } from "react-router-dom";

export const ImgText = ({ title, text, className }) => {
  return (
    <div className={`text-white flex flex-col justify-between ${className}`}>
      <h4 className="font-inter font-semibold text-2xl leading-6">{title}</h4>
      <p className="smallp font-poppins font-normal text-sm leading-[21px]">
        {text}
      </p>
    </div>
  );
};

const Section7 = () => {
  return (
    <div className="container mb-20 px-3">
      <div className="w-max h-auto mb-6">
        <Top title="Featured" />
        <h2 className="text-lg font-semibold">New Arrival</h2>
      </div>

      {/* Wrapper */}
      <div className="flex flex-col lg:flex-row gap-[30px] lg:h-[600px] h-auto">
        {/* Left block */}
        <div className="w-full lg:w-[570px] h-[70vh] lg:h-full bg-black">
          <div
            style={{ backgroundImage: `url(${img1})` }}
            className="w-full h-full bg-center bg-cover bg-no-repeat flex justify-start items-end"
          >
            <div className="h-[122px] flex flex-col justify-between mb-10 ml-8">
              <ImgText
                className="w-[242px] h-[82px]"
                title={"PlayStation 5"}
                text={"Black and White version of the PS5 coming out on sale."}
              />
              <Link to={"/shop"} className="text-white">
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        {/* Right block */}
        <div className="flex flex-col gap-6 w-full lg:w-[570px]">
          {/* Top right image */}
          <div className="w-full h-[284px] bg-black">
            <div
              style={{ backgroundImage: `url(${img2})` }}
              className="w-full h-full bg-center bg-cover bg-no-repeat flex justify-start items-end"
            >
              <div className="h-[122px] flex flex-col justify-between mb-10 ml-8">
                <ImgText
                  className="w-[242px] h-[82px]"
                  title={"Women’s Collections"}
                  text={
                    "Featured woman collections that give you another vibe."
                  }
                />
                <Link to={"/shop"} className="text-white">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom two images side-by-side on desktop, stacked on mobile */}
          <div className="flex flex-col lg:flex-row gap-[30px]">
            {/* Speakers */}
            <div className="w-full lg:w-[270px] h-[284px] bg-black">
              <div
                style={{ backgroundImage: `url(${img3})` }}
                className="w-full h-full bg-center bg-cover bg-no-repeat flex items-end"
              >
                <div className="h-[85px] flex flex-col justify-between mb-10 ml-6">
                  <ImgText
                    className="w-[242px] h-[53px]"
                    title={"Speakers"}
                    text={"Amazon wireless speakers."}
                  />
                  <Link to={"/shop"} className="text-white">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Perfume */}
            <div className="w-full lg:w-[270px] h-[284px] bg-black">
              <div
                style={{ backgroundImage: `url(${img4})` }}
                className="w-full h-full bg-center bg-cover bg-no-repeat flex items-end"
              >
                <div className="h-[85px] flex flex-col justify-between mb-10 ml-6">
                  <ImgText
                    className="w-[242px] h-[53px]"
                    title={"Perfume"}
                    text={"GUCCI INTENSE OUD EDP."}
                  />
                  <Link to={"/shop"} className="text-white">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
