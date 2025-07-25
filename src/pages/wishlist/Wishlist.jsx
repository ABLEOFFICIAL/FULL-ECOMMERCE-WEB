import React from "react";
import { useSelector } from "react-redux";
import cartImg from "../../assets/Cart2.png";
import delImg from "../../assets/Frame 568.png";
import { Top } from "../home/Section2";
import { useProducts } from "../../App";
import eye from "../../assets/Fill Eye.png";
import vector1 from "../../assets/Vector2.png";
import vector2 from "../../assets/Vector2.png";

const Wishlist = () => {
  const Wishlist = useSelector((state) => state.productsAuth.wishlist);
  const Products = useProducts();
  console.log(Wishlist);

  return (
    <div className="container h-auto flex flex-col gap-20 my-20 ">
      <div className="h-auto w-full flex flex-col gap-[60px] ">
        <div className="flex justify-between h-[56px] ">
          <p className="text-[20px] leading-[26px] font-normal ">
            WishList ({Wishlist.length})
          </p>
          <button className="font-poppins font-medium mediump w-[223px] h-full rounded-sm border border-neutral-900/50 flex justify-center items-center ">
            Move All To Bag
          </button>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_min(270px))] gap-6">
          {Wishlist &&
            Wishlist.map((item) => {
              return (
                <div
                  key={item.id}
                  className="h-full w-[270px] flex flex-col justify-between group mb-10"
                >
                  <div className="w-full h-[250px] bg-[#F5F5F5] rounded-sm flex justify-center items-center relative ">
                    <img src={item.img} className="w-[190px] h-[180px] " />
                    <span className="bg-black h-[41px] w-full absolute bottom-0 left-0 text-white flex items-center justify-center gap-2 cursor-pointer ">
                      <img src={cartImg} alt="" />
                      Add To Cart
                    </span>
                    <img
                      src={delImg}
                      alt=""
                      className="absolute top-4 right-2"
                    />

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
                    {/* <span className="flex items-center gap ">
                      {[...Array(5)].map((star, idx) => {
                        return <img src={vector2} key={idx} />;
                      })}
                    </span> */}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="h-[466px]  w-full flex flex-col gap-[60px] ">
        <div className="flex justify-between items-center h-[56px]">
          <Top title={"Just For You"} color="#000" font="normal" />
          <button className="font-poppins font-medium mediump w-[223px] h-full rounded-sm border border-neutral-900/50 flex justify-center items-center ">
            See All
          </button>
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
                  <span className="bg-black h-[41px] w-full absolute bottom-0 left-0 text-white flex items-center justify-center gap-2 cursor-pointer">
                    <img src={cartImg} alt="" />
                    Add To Cart
                  </span>

                  <img src={eye} alt="" className="absolute top-4 right-2" />
                  <span className="absolute top-2 left-2 bg-[var(--red)] w-[55px] h-[26px] rounded-sm text-white text-center text-xs leading-[18px] font-normal flex justify-center items-center ">
                    -{item.discount}%
                  </span>
                </div>
                <div>
                  <p className="boldp">{item.name}</p>
                  <span className="flex items-center gap-3 ">
                    <p className="mediump text-[#DB4444]">${item.price}</p>
                    <p className="mediump line-through text-neutral-600/50 ">
                      {item.discount ? `$${item.price - item.discount}` : null}
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
  );
};

export default Wishlist;
