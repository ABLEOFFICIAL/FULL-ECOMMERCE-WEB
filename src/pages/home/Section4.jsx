import React from "react";
import Arrowleft from "../../assets/Fill With Left Arrow.png";
import Arrowright from "../../assets/Fill with Right Arrow.png";
import { useDispatch, useSelector } from "react-redux";
import { AddToWishlist } from "../../store/productSlice";
import vector1 from "../../assets/Vector2.png";
import vector2 from "../../assets/Vector2.png";
import eye from "../../assets/Fill Eye.png";
import heart from "../../assets/Fill Heart.png";
import { useProducts } from "../../App";
import { Like, Unlike } from "../../components/navbar/Icons";
import { Link } from "react-router-dom";
// import { Products } from "./Section2";

export const Top = ({ title }) => {
  return (
    <div className="flex items-center gap-4">
      <span className="block h-10 w-5 bg-[#DB4444] rounded-sm "></span>
      <p className="text-base font-semibold leading-5 text-[#DB4444] ">
        {title}
      </p>
    </div>
  );
};
export const Direction = () => {
  return (
    <div className="flex items-center gap-3 ">
      <img src={Arrowleft} className="w-[46px] " />
      <img src={Arrowright} className="w-[46px] " />
    </div>
  );
};

const Section2 = () => {
  const wishlist = useSelector((state) => state.productsAuth.wishlist);
  const Products = useProducts();
  const dispatch = useDispatch();
  const BestSelling = Products.filter(
    (product) => product.bestselling === true
  );

  const handleAddToWishlist = (id) => {
    dispatch(AddToWishlist(id));
  };

  return (
    <main className="border-b-[1px] border-b-neutral-600/50 pb-20 container px-3">
      <div className=" container md:h-[518px] h-auto ">
        <div className="flex flex-col justify-between h-full ">
          <div className="flex items-end justify-between md:w-[1170px] w-full h-[108px] mb-2 md:mb-0 ">
            <div className="w-[600px] h-[103px] flex items-end justify-between ">
              <div className="flex flex-col justify-between h-full ">
                <Top title="This Month" />
                <h2>Best Selling Products</h2>
              </div>
            </div>
            <button className="md:w-[234px] w-max px-5 md:px-0 md:h-[56px] h-[44px] rounded-sm bg-[var(--red)] text-white block ml-auto text-xs md:text-lg whitespace-nowrap ">
              View All
            </button>
          </div>
          <div className="md:h-[350px] h-auto md:flex justify-between items-center grid grid-cols-2 gap-4 ">
            {BestSelling.slice(0, 4).map((item) => {
              return (
                <div
                  key={item.id}
                  className="h-full md:w-[270px] w-full flex flex-col justify-between group  "
                >
                  <div className="w-full md:h-[250px] h-[180px] bg-[#F5F5F5] rounded-sm flex justify-center items-center relative">
                    <Link to={`/product/${item.id}`}>
                      <img
                        src={item.img}
                        className="w-[140px] md:w-[190px] h-[130px] md:h-[180px]"
                      />
                      <img
                        src={eye}
                        alt="View"
                        className="absolute top-10 md:top-12 right-2 cursor-pointer w-[26px] md:w-[32px] "
                      />
                    </Link>
                    <span
                      onClick={() => dispatch(AddToCart(item.id))}
                      className={`bg-black h-[37px] text-xs md:text-[16px] md:h-[41px] w-full absolute cursor-pointer bottom-0 left-0 text-white flex items-center justify-center md:opacity-0 opacity-100  group-hover:opacity-100 transition-opacity duration-300`}
                    >
                      Add To Cart
                    </span>
                    {/* <img
                      onClick={() => handleAddToWishlist(item.id)}
                      src={heart}
                      alt="Like"
                      className="absolute top-2 right-2 cursor-pointer"
                    /> */}

                    <span
                      onClick={() => handleAddToWishlist(item.id)}
                      className="absolute top-1 right-2 cursor-pointer"
                    >
                      {wishlist.some((wishItem) => wishItem.id === item.id) ? (
                        <Unlike
                          className={
                            "text-[var(--red)] bg-white size-7 md:size-8 p-1 rounded-full "
                          }
                        />
                      ) : (
                        <Like
                          className={
                            "bg-white size-7 md:size-8 p-1 rounded-full stroke-1 "
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
                    <p className="md:boldp ">{item.name}</p>
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
    </main>
  );
};

export default Section2;
