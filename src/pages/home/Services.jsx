import React from "react";
import img1 from "../../assets/Services.png";
import img2 from "../../assets/Services (1).png";
import img3 from "../../assets/Services (2).png";

const Services = () => {
  return (
    <div className="w-full md:w-[943px] h-auto gap-7 md:gap-0 md:h-[161px] flex flex-col md:flex-row items-center justify-between text-center mx-auto mb-28 ">
      <div className="h-[161px] w-[256px] flex flex-col justify-between items-center  ">
        <img src={img1} alt="" />
        <span className="font-poppin h-[57px] flex flex-col justify-between ">
          <h4 className="text-xl leading-7 font-semibold  ">
            FREE AND FAST DELIVERY
          </h4>
          <p className="smallp">Free delivery for all orders over $140</p>
        </span>
      </div>
      <div className="h-[161px] w-[256px] flex flex-col justify-between items-center  ">
        <img src={img2} alt="" />
        <span className="font-poppin h-[57px] flex flex-col justify-between ">
          <h4 className="text-xl leading-7 font-semibold  ">
            24/7 CUSTOMER SERVICE
          </h4>
          <p className="smallp">Friendly 24/7 customer support</p>
        </span>
      </div>
      <div className="h-[161px] w-[256px] flex flex-col justify-between items-center  ">
        <img src={img3} alt="" />
        <span className="font-poppin h-[57px] flex flex-col justify-between ">
          <h4 className="text-xl leading-7 font-semibold  ">
            MONEY BACK GUARANTEE
          </h4>
          <p className="smallp">We reurn money within 30 days</p>
        </span>
      </div>
    </div>
  );
};

export default Services;
