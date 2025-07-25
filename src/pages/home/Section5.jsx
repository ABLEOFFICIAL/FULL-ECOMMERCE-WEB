import React from "react";
import speaker from "../../assets/Frame 694.png";

const Section5 = () => {
  return (
    <section className="container">
      <div className="bg-black md:h-[500px] h-[90vh] text-white flex md:flex-row flex-col md:items-center items-start justify-between md:p-10 p-3">
        <div className="md:w-1/2 w-full h-full flex flex-col justify-between ">
          <p className="font-semibold text-base text-center md:text-start leading-5 text-[#00FF66] ">
            Categories
          </p>
          <h2 className="md:w-[443px] text-center md:text-start w-[80%] mx-auto md:m-0 ">
            Enhance Your Music Experience
          </h2>
          <div className="w-[302px] h-[50px] flex items-end gap-2 mb-1 mx-auto md:m-0">
            <span className="flex flex-col  items-center py-3 w-[62px] h-[62px] text-black p-1 bg-[#F5F5F5] rounded-full">
              <p className="font-semibold text-base leading-5 ">03</p>
              <p className="font-normal text-[11px] leading-[18px] ">Days</p>
            </span>

            <span className="flex flex-col  items-center py-3 w-[62px] h-[62px] text-black p-1 bg-[#F5F5F5] rounded-full">
              <p className="font-semibold text-base leading-5 ">23</p>
              <p className="font-normal text-[11px] leading-[18px] ">Hours</p>
            </span>
            <span className="flex flex-col  items-center py-3 w-[62px] h-[62px] text-black p-1 bg-[#F5F5F5] rounded-full">
              <p className="font-semibold text-base leading-5 ">19</p>
              <p className="font-normal text-[11px] leading-[18px] ">Minutes</p>
            </span>
            <span className="flex flex-col  items-center py-3 w-[62px] h-[62px] text-black p-1 bg-[#F5F5F5] rounded-full">
              <p className="font-semibold text-base leading-5 ">56</p>
              <p className="font-normal text-[11px] leading-[18px] ">Seconds</p>
            </span>
          </div>
          <button className="w-[171px] h-[56px] bg-[#00FF66] rounded-sm text-base leading-6 mx-auto md:m-0">
            Buy Now!
          </button>
        </div>
        <div className="relative md:w-1/2 w-full h-full flex items-center justify-center">
          {/* White blurred background behind the image */}
          <div className="absolute md:w-[300px] w-[150px] md:h-[300px] h-[200px] bg-white rounded-full blur-3xl opacity-60 z-0 "></div>

          {/* Speaker Image */}
          <img
            src={speaker}
            className="relative z-10 md:w-[568px] md:h-[330px] "
          />
        </div>
      </div>
    </section>
  );
};

export default Section5;
