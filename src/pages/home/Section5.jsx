import React, { useEffect, useState } from "react";
import speaker from "../../assets/Frame 694.png";
import { Link } from "react-router-dom";

const Section5 = () => {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 4);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="container">
      <div className="bg-black lg:h-[500px] h-[90vh] text-white flex lg:flex-row flex-col lg:items-center items-start justify-between lg:p-10 p-3">
        <div className="lg:w-1/2 w-full h-full flex flex-col justify-between ">
          <p className="font-semibold text-base text-center lg:text-start leading-5 text-[#00FF66] ">
            Categories
          </p>
          <h2 className="lg:w-[443px] text-center lg:text-start w-[80%] mx-auto lg:m-0 ">
            Enhance Your Music Experience
          </h2>
          <div className="w-[302px] h-[50px] flex items-end gap-2 mb-1 mx-auto lg:m-0">
            <span className="flex flex-col  items-center py-3 w-[62px] h-[62px] text-black p-1 bg-[#F5F5F5] rounded-full">
              <p className="font-semibold text-base leading-5 ">
                {countdown.days}
              </p>
              <p className="font-normal text-[11px] leading-[18px] ">Days</p>
            </span>

            <span className="flex flex-col  items-center py-3 w-[62px] h-[62px] text-black p-1 bg-[#F5F5F5] rounded-full">
              <p className="font-semibold text-base leading-5 ">
                {countdown.hours}
              </p>
              <p className="font-normal text-[11px] leading-[18px] ">Hours</p>
            </span>
            <span className="flex flex-col  items-center py-3 w-[62px] h-[62px] text-black p-1 bg-[#F5F5F5] rounded-full">
              <p className="font-semibold text-base leading-5 ">
                {countdown.minutes}
              </p>
              <p className="font-normal text-[11px] leading-[18px] ">Minutes</p>
            </span>
            <span className="flex flex-col  items-center py-3 w-[62px] h-[62px] text-black p-1 bg-[#F5F5F5] rounded-full">
              <p className="font-semibold text-base leading-5 ">
                {countdown.seconds}
              </p>
              <p className="font-normal text-[11px] leading-[18px] ">Seconds</p>
            </span>
          </div>
          <Link
            to={`/product/41`}
            className="w-[171px] flex justify-center items-center h-[56px] bg-[#00FF66] rounded-sm text-base leading-6 mx-auto lg:m-0"
          >
            Buy Now!
          </Link>
        </div>
        <div className="relative lg:w-1/2 w-full h-full flex items-center justify-center">
          {/* White blurred background behind the image */}
          <div className="absolute lg:w-[300px] w-[150px] lg:h-[300px] h-[200px] bg-white rounded-full blur-3xl opacity-60 z-0 "></div>

          {/* Speaker Image */}
          <img
            src={speaker}
            className="relative z-10 lg:w-[568px] lg:h-[330px] "
          />
        </div>
      </div>
    </section>
  );
};

export default Section5;
