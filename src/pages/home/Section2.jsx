import React, { useEffect, useState, useRef } from "react";
import Arrowleft from "../../assets/Fill With Left Arrow.png";
import Arrowright from "../../assets/Fill with Right Arrow.png";
import eye from "../../assets/Fill Eye.png";
import heart from "../../assets/Fill Heart.png";
import vector1 from "../../assets/Vector2.png";
import vector2 from "../../assets/Vector2.png";
import { AddToWishlist } from "../../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useProducts } from "../../App";
import { Link } from "react-router-dom";
import { Like, Unlike } from "../../components/navbar/Icons";
import { AddToCart } from "../../store/productSlice";

export const Top = ({ title, color = "#DB4444", font = "semibold" }) => {
  return (
    <div className="flex items-center gap-4">
      <span
        className={`block h-8 lg:h-10 w-4 lg:w-5 bg-[#DB4444] rounded-sm `}
      ></span>
      <p
        className={`lg:text-base text-sm font-${font} leading-5 text-[${color}] `}
      >
        {title}
      </p>
    </div>
  );
};

export const Direction = ({ className }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src={Arrowleft} className="w-[38px] lg:w-[46px] " />
      <img src={Arrowright} className="w-[38px] lg:w-[46px] " />
    </div>
  );
};

const Section2 = () => {
  const Products = useProducts();
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.productsAuth.wishlist);
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

  const FlashSales = Products.filter((product) => product.flash === true);

  const handleAddToWishlist = (id) => {
    dispatch(AddToWishlist(id));
  };

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    console.log("Updated wishlist:", wishlist);
  }, [wishlist]);

  return (
    <div className="border-b-[1px] border-b-neutral-600/50 container">
      <div className="w-full lg:w-[1430px] mx-auto h-auto lg:h-[493px] flex flex-col gap-10 ">
        <div className="flex items-end justify-between w-[1170px] px-3 lg:px-0">
          <div className="w-[600px] lg:h-[103px] gap-3 lg:gap-0 h-auto flex flex-col lg:flex-row lg:items-end items-start justify-between ">
            <div className="flex flex-col justify-between h-full ">
              <Top title="Today's" />
              <h2>Flash Sales</h2>
            </div>
            <div className="w-[302px] h-[50px] flex items-end gap-2 mb-1">
              <span className="flex flex-col gap-1">
                <span
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  className="font-medium text-xs leading-[18px] "
                >
                  Days
                </span>
                <span
                  style={{ fontFamily: "Inter, sans-serif" }}
                  className="font-bold lg:text-[32px] text-[28px] leading-[30px] "
                >
                  {countdown.days}
                </span>
              </span>
              <span>:</span>
              <span className="flex flex-col gap-1">
                <span
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  className="font-medium text-xs leading-[18px] "
                >
                  Hours
                </span>
                <span
                  style={{ fontFamily: "Inter, sans-serif" }}
                  className="font-bold lg:text-[32px] text-[28px] leading-[30px] "
                >
                  {countdown.hours}
                </span>
              </span>
              <span>:</span>
              <span className="flex flex-col gap-1">
                <span
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  className="font-medium text-xs leading-[18px] "
                >
                  Minutes
                </span>
                <span
                  style={{ fontFamily: "Inter, sans-serif" }}
                  className="font-bold lg:text-[32px] text-[28px] leading-[30px] "
                >
                  {countdown.minutes}
                </span>
              </span>
              <span>:</span>
              <span className="flex flex-col gap-1">
                <span
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  className="font-medium text-xs leading-[18px] "
                >
                  Seconds
                </span>
                <span
                  style={{ fontFamily: "Inter, sans-serif" }}
                  className="font-bold lg:text-[32px] text-[28px] leading-[30px] "
                >
                  {countdown.seconds}
                </span>
              </span>
            </div>
          </div>
          <Direction className="hidden lg:flex" />
        </div>
        <div
          style={{ scrollbarWidth: "none" }}
          className="lg:overflow-x-auto h-auto lg:h-[350px] overflow-hidden"
        >
          <div className="w-full lg:w-max px-3 h-auto lg:flex gap-4 lg:gap-[30px] grid grid-cols-2">
            {FlashSales.map((item) => {
              return (
                <div
                  key={item.id}
                  className="h-full lg:w-[270px] w-full flex flex-col justify-between group  "
                >
                  <div className="w-full lg:h-[250px] h-[180px] bg-[#F5F5F5] rounded-sm flex justify-center items-center relative">
                    <Link to={`/product/${item.id}`}>
                      <img
                        src={item.img}
                        className="w-[140px] lg:w-[190px] h-[130px] lg:h-[180px]"
                      />
                      <img
                        src={eye}
                        alt="View"
                        className="absolute top-10 lg:top-12 right-2 cursor-pointer w-[26px] lg:w-[32px] "
                      />
                    </Link>
                    <span
                      onClick={() => dispatch(AddToCart(item.id))}
                      className={`bg-black h-[37px] text-xs lg:text-[16px] lg:h-[41px] w-full absolute cursor-pointer bottom-0 left-0 text-white flex items-center justify-center lg:opacity-0 opacity-100  group-hover:opacity-100 transition-opacity duration-300`}
                    >
                      Add To Cart
                    </span>

                    <span
                      onClick={() => handleAddToWishlist(item.id)}
                      className="absolute top-1 right-2 cursor-pointer"
                    >
                      {wishlist.some((wishItem) => wishItem.id === item.id) ? (
                        <Unlike
                          className={
                            "text-[var(--red)] bg-white size-7 lg:size-8 p-1 rounded-full "
                          }
                        />
                      ) : (
                        <Like
                          className={
                            "bg-white size-7 lg:size-8 p-1 rounded-full stroke-1 "
                          }
                        />
                      )}
                    </span>
                    {item.discount && (
                      <span className="absolute top-2 left-2 bg-[var(--red)] w-[55px] h-[26px] rounded-sm text-white text-center text-xs leading-[18px] font-normal flex justify-center items-center">
                        -{item.discount}%
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="lg:boldp ">{item.name}</p>
                    <span className="flex items-center gap-3">
                      <p className="mediump text-[#DB4444]">${item.price}</p>
                      <p className="mediump line-through text-neutral-600/50">
                        {item.discount
                          ? `$${item.price - item.discount}`
                          : null}
                      </p>
                    </span>
                    <span className="flex items-center gap">
                      {[...Array(5)].map((star, idx) => {
                        return <img src={vector2} key={idx} />;
                      })}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Link
        to={"/products"}
        className="w-[234px] h-[56px] rounded-sm bg-[var(--red)] text-white my-10 mx-auto flex justify-center items-center "
      >
        View All Products
      </Link>
    </div>
  );
};

export default Section2;
