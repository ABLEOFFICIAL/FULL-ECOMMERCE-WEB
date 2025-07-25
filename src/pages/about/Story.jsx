import React from "react";
import hero from "../../assets/story-hero.png";

const Story = () => {
  return (
    <div className="w-[1430px] ml-auto flex items-center justify-between my-16">
      <div className="w-[525px] h-[336px] flex flex-col gap-6 ">
        <h3 className="font-inter font-semibold text-[54px] leading-[64px] ">
          Our Story
        </h3>
        <span className="h-[232px] flex flex-col justify-between ">
          <p className="mediump">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p className="mediump">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </span>
      </div>
      <img src={hero} alt="" />
    </div>
  );
};

export default Story;
