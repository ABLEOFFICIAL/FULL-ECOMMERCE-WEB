import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../App";
import vector2 from "../../assets/Vector2.png";
import { BiHeart } from "react-icons/bi";
import delivery from "../../assets/icon-delivery.png";
import deliveryReturn from "../../assets/Icon-return.png";
import { Top } from "../home/Section2";
import eye from "../../assets/Fill Eye.png";
import heart from "../../assets/Fill Heart.png";

const Details = () => {
  const [quantity, setQuantity] = useState(2);
  const { id } = useParams();
  const Products = useProducts();
  const clickedProduct = Products.filter(
    (product) => product.id === Number(id)
  );
  //   const { images } = clickedProduct[0];
  const main = clickedProduct[0];

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };
  return (
    main && (
      <div className="container my-20 ">
        <div className="flex justify-between ">
          <div className="flex items-center gap-8 ">
            {/* images */}
            <div className="flex flex-col justify-between h-[600px] ">
              {main.images.map((img, idx) => {
                return (
                  <div
                    key={idx}
                    className="h-[138px] w-[170px] bg-[#F5F5F5] flex justify-center items-center rounded "
                  >
                    <img src={img} className="w-[121px] h-[114px] " />
                  </div>
                );
              })}
            </div>
            <div className="w-[500px] h-[600px] flex justify-center items-center bg-[#F5F5F5] rounded  ">
              <img
                src={main.img}
                className="w-[446px] h-[315px] bg-center bg-cover "
              />
            </div>
          </div>
          <div className="flex flex-col justify-between h-[600px] ">
            <h3 className="font-inter font-semibold text-2xl leading-6 ">
              {main.name}
            </h3>
            <span>
              {" "}
              <span className="flex items-center gap ">
                {[...Array(5)].map((star, idx) => {
                  return <img src={vector2} key={idx} />;
                })}
              </span>
              ({main.rating.count} Reviews)
            </span>
            <h3 className="font-inter font-normal text-2xl leading-6 ">
              ${main.price}.00
            </h3>
            <p className="smallp w-[373px] ">{main.description}</p>
            <span className="flex items-center gap-2">
              <p className="font-inter font-normal text-[20px] leading-5 ">
                Colours:
              </p>
              <span className="flex items-center gap-1 ">
                <span className="h-3 w-3 rounded-full bg-red-600 block border "></span>
                <span className="h-3 w-3 rounded-full bg-blue-400 block "></span>
              </span>
            </span>
            <span className="flex items-center justify-between w-[224px] ">
              <p className="font-inter font-normal text-[20px] leading-5 ">
                Size:
              </p>
              <span className="border w-[32px] h-[32px] rounded-sm flex justify-center items-center ">
                XS
              </span>
              <span className="border w-[32px] h-[32px] rounded-sm flex justify-center items-center ">
                S
              </span>
              <span className="border w-[32px] h-[32px] rounded-sm flex justify-center items-center ">
                M
              </span>
              <span className="border w-[32px] h-[32px] rounded-sm flex justify-center items-center ">
                L
              </span>
              <span className="border w-[32px] h-[32px] rounded-sm flex justify-center items-center ">
                XL
              </span>
            </span>
            <div className="flex items-center space-x-4">
              {/* Quantity selector */}
              <div className="flex border rounded overflow-hidden">
                <button
                  onClick={decrement}
                  className="px-3 py-1 text-lg border-r hover:bg-gray-100 cursor-pointer "
                >
                  −
                </button>
                <div className="w-12 flex items-center justify-center">
                  {quantity}
                </div>
                <button
                  onClick={increment}
                  className="px-3 py-1 text-lg bg-[var(--red)] text-white cursor-pointer "
                >
                  +
                </button>
              </div>

              {/* Buy Now button */}
              <button className="bg-[var(--red)] h-[44px] w-[165px] flex justify-center items-center text-white rounded cursor-pointer">
                <p className="mediump">Buy Now</p>
              </button>

              {/* Wishlist button */}
              <button className="border p-2 rounded hover:bg-gray-100">
                <BiHeart size={20} />
              </button>
            </div>
            <div className="w-[399px] h-[180px] flex flex-col border rounded justify-between ">
              <div className="h-1/2 border-b  flex justify-start items-center ">
                <div className="flex items-center pl-8">
                  <img src={delivery} alt="" />
                  <span>
                    <p className="mediump">Free Delivery</p>
                    <p className="font-medium text-xs leading-[18px] underline ">
                      Enter your postal code for Delivery Availability
                    </p>
                  </span>
                </div>
              </div>
              <div className="h-1/2 flex justify-start items-center">
                <div className="flex items-center pl-8">
                  <img src={deliveryReturn} alt="" />
                  <span>
                    <p className="mediump">Free Delivery</p>
                    <p className="font-medium text-xs leading-[18px] underline ">
                      Free 30 Days Delivery Returns. Details{" "}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* features */}
        </div>
        <div className="h-[466px]  w-full flex flex-col gap-[60px] my-32 ">
          <div className="flex justify-between items-center h-[56px]">
            <Top title={"Related Item"} />
          </div>
          <div className="flex flex-wrap justify-between">
            {Products.slice(0, 4).map((item) => {
              return (
                <div
                  key={item.id}
                  className="h-full w-[270px] flex flex-col justify-between group"
                >
                  <div className="w-full h-[250px] bg-[#F5F5F5] rounded-sm flex justify-center items-center relative ">
                    <img src={item.img} className="w-[190px] h-[180px] " />
                    <span className="bg-black h-[41px] w-full absolute cursor-pointer bottom-0 left-0 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Add To Cart
                    </span>
                    <img
                      onClick={() => handleAddToWishlist(item.id)}
                      src={heart}
                      alt=""
                      className="absolute top-2 right-2"
                    />
                    <img src={eye} alt="" className="absolute top-14 right-2" />
                    <span className="absolute top-2 left-2 bg-[var(--red)] w-[55px] h-[26px] rounded-sm text-white text-center text-xs leading-[18px] font-normal flex justify-center items-center ">
                      -{item.discount}%
                    </span>
                  </div>
                  <div>
                    <p className="boldp">{item.name}</p>
                    <span className="flex items-center gap-3 ">
                      <p className="mediump text-[#DB4444]">${item.price}</p>
                      <p className="mediump line-through text-neutral-600/50 ">
                        {item.discount
                          ? `$${item.price - item.discount}`
                          : null}
                      </p>
                    </span>
                    <span className="flex items-center gap ">
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
    )
  );
};

export default Details;
