import React, { useEffect, useState } from "react";
import iphone from "../../assets/hero_endframe__cvklg0xk3w6e_large 2.png";
import apple from "../../assets/1200px-Apple_gray_logo 1.png";
import circle from "../../assets/Ellipse 7.png";
import circle2 from "../../assets/Group 1000005940.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img1 from "../../assets/Ellipse 7.png";
import img2 from "../../assets/Group 1000005940.png";
import CategoryLayout from "../../components/CategoryLayout";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setProductCategory } from "../../store/productSlice";

export const CategorySide = () => {
  const Categories = [
    { category: "All Categories" },
    { category: "Woman’s Fashion", list: ["dress", "Jewelry", "makeup"] },
    { category: "Men's Fashion", list: ["wrist watch", "wallet", "shoe"] },
    { category: "Electronics" },
    { category: "Home & Lifestyle" },
    { category: "Medicine" },
    { category: "Sports & Outdoor" },
    { category: "Baby’s & Toys" },
    { category: "Groceries" },
    { category: "Health & Beauty" },
  ];
  const navigate = useNavigate();
  const productCategory = useSelector(
    (state) => state.productsAuth.productCategory
  );
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(setProductCategory(null));
    }
  }, [location.pathname, dispatch]);

  const handleCategory = (category) => {
    navigate("/products");
    dispatch(setProductCategory(category));
  };

  return (
    <div className="border-r-[1px] border-neutral-600/50 hidden lg:block">
      <span className="flex flex-col gap-4 pr-6 mt-6 md:pr-4 md:mt-4">
        {Categories.map((item, idx) => (
          <button
            onClick={() => {
              handleCategory(item.category);
            }}
            key={idx}
            className={`text-start cursor-pointer ${
              productCategory === item.category
                ? "bg-[var(--red)] text-white p-2 rounded-md"
                : ""
            } `}
          >
            <p className="text-sm md:text-base">{item.category}</p>
          </button>
        ))}
      </span>
    </div>
  );
};

export const ADs = [
  {
    id: 29,
    logo: apple,
    name: "iPhone 13 Series",
    promo: "Up to 10% off Voucher",
    image: iphone,
  },
  {
    id: 37,
    logo: "/logo2.png",
    name: "Drone PSD",
    promo: "Up to 15% Off This Week Only",
    image: "/ad2.png",
  },
  {
    id: 38,
    logo: "/logo3.png",
    name: "Redmi 14C",
    promo: "Grab Yours with 20% Off",
    image: "/ad4.png",
  },
  {
    id: 39,
    logo: apple,
    name: "i Smart Watch",
    promo: "Flat 10% Discount on All Models",
    image: "/ad3.png",
  },
  {
    id: 40,
    logo: "/logo4.png",
    name: "Nike Air Jordan",
    promo: "Up to 25% Off Fitness Wearables",
    image: "/ad5.png",
  },
];

const Section1 = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setTimeout(() => {
      setCount((prev) => {
        const update = (prev + 1) % ADs.length;
        return update;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div>
      <div className="container flex justify-between flex-col md:flex-row">
        {/* Sidebar */}
        <CategoryLayout />
        {/* Main Banner */}
        {/* Text */}
        {ADs.map((ad, idx) => {
          if (idx === count) {
            return (
              <motion.div
                key={idx}
                className="max-w-[892px] w-full h-[80vh] md:h-[400px] lg:h-[344px] bg-black flex flex-col gap-12 md:gap-0 md:flex-row mt-0 md:mt-6 lg:mt-10 relative z-0"
              >
                <div className="text-white w-full md:w-1/2 flex flex-col justify-between p-6 md:p-8 lg:p-10 gap-3 md:gap-5">
                  <span className="flex items-center gap-3 md:gap-4 mx-auto md:mx-0">
                    <img
                      src={ad.logo}
                      alt="Apple Logo"
                      className="w-5 md:w-6"
                    />
                    <p className="medium text-sm md:text-base">{ad.name}</p>
                  </span>
                  <h1 className="text-center md:text-left text-xl md:text-2xl lg:text-3xl">
                    {ad.promo}
                  </h1>
                  <Link
                    to={`/product/${ad.id}`}
                    className="mx-auto md:mx-0 cursor-pointer p-3"
                  >
                    <p className="mediump py-1 border-b-[1px] border-b-white inline text-sm md:text-base">
                      Shop Now
                    </p>
                  </Link>
                </div>
                {/* Image */}
                <img
                  src={ad.image}
                  alt="iPhone"
                  className="w-[300px] md:w-[360px] lg:w-[496px] object-contain mx-auto md:mx-0"
                />

                {/* Indicators */}
                <div className="absolute bottom-4 w-full">
                  <div className="flex items-center gap-2 mx-auto w-[110px]">
                    {[...Array(5)].map((star, idx) => {
                      return (
                        <img src={idx === count ? img2 : img1} key={idx} />
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          }
        })}
        {/* <div className="text-white w-full md:w-1/2 flex flex-col justify-between p-6 md:p-8 lg:p-10 gap-3 md:gap-5">
            <span className="flex items-center gap-3 md:gap-4 mx-auto md:mx-0">
              <img src={apple} `alt="Apple Logo" className="w-5 md:w-6" />
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
          </div> */}
      </div>
    </div>
  );
};

export default Section1;
