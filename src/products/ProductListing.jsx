import React from "react";
import CategoryLayout from "../components/CategoryLayout";
import { useProducts } from "../App";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../store/productSlice";
import { Like, Unlike } from "../components/navbar/Icons";
import eye from "../assets/Fill Eye.png";
import vector2 from "../assets/Vector2.png";
import { AddToWishlist } from "../store/productSlice";

const ProductListing = () => {
  const Products = useProducts();
  const wishlist = useSelector((state) => state.productsAuth.wishlist);

  const dispatch = useDispatch();
  const handleAddToWishlist = (id) => {
    dispatch(AddToWishlist(id));
  };
  return (
    <div className="container flex mb-10 ">
      <CategoryLayout />
      <div className=" w-[950px] h-auto ml-auto p-10 ">
        <div className=" flex flex-col gap-10 ">
          <div className="flex items-center gap-3">
            <p className="mediump">Sort by price:</p>
            <input
              type="number"
              name="price"
              className="w-32 h-10 border border-neutral-900/50 rounded-sm px-3 focus:outline-none "
            />
          </div>
          <div className="lg:h-max h-max lg:flex lg:flex-wrap justify-between items-center grid grid-cols-2 gap-4 ">
            {Products.map((item) => {
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
    </div>
  );
};

export default ProductListing;
