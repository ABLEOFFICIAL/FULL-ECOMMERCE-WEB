import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProducts } from "../../App";
import vector2 from "../../assets/Vector2.png";
import { BiHeart } from "react-icons/bi";
import delivery from "../../assets/icon-delivery.png";
import deliveryReturn from "../../assets/Icon-return.png";
import { Top } from "../home/Section2";
import eye from "../../assets/Fill Eye.png";
import heart from "../../assets/Fill Heart.png";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../store/productSlice";
import { Like, Unlike } from "../../components/navbar/Icons";

const Details = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const Products = useProducts();
  const clickedProduct = Products.filter(
    (product) => product.id === Number(id)
  );

  const handleAddToWishlist = (id) => {
    dispatch(AddToWishlist(id));
  };
  const wishlist = useSelector((state) => state.productsAuth.wishlist);

  //   const { images } = clickedProduct[0];
  const main = clickedProduct[0];
  const dispatch = useDispatch();
  const increment = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };
  return (
    main && (
      <div className="container my-20 px-4">
        {/* Product Display */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left - Images */}
          <div className="flex flex-col-reverse md:flex-row items-start gap-6">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 md:h-[600px] overflow-x-auto md:overflow-visible">
              {main.images.map((img, idx) => (
                <div
                  key={idx}
                  className="h-[80px] w-[70px] md:h-[138px] md:w-[170px] bg-[#F5F5F5] flex justify-center items-center rounded"
                >
                  <img
                    src={img}
                    className="w-[60px] md:w-[121px] h-auto object-center object-cover "
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="w-full md:w-[500px] h-[300px] md:h-[600px] flex justify-center items-center bg-[#F5F5F5] rounded">
              <img
                src={main.img}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          {/* Right - Details */}
          <div className="flex flex-col justify-between md:h-[600px] w-full md:w-1/2 gap-5">
            <h3 className="font-inter font-semibold text-xl md:text-2xl">
              {main.name}
            </h3>
            <span className="flex items-center gap-2">
              {[...Array(5)].map((_, idx) => (
                <img src={vector2} key={idx} className="w-4" />
              ))}
              <span className="text-sm text-gray-500">
                ({main.rating.count} Reviews)
              </span>
            </span>
            <h3 className="text-xl">${main.price}.00</h3>
            <p className="text-sm text-gray-600">{main.description}</p>

            {/* Color Options */}
            <div className="flex items-center gap-2">
              <p className="text-base">Colours:</p>
              <span className="flex items-center gap-1">
                <span className="h-3 w-3 rounded-full bg-red-600 block border"></span>
                <span className="h-3 w-3 rounded-full bg-blue-400 block"></span>
              </span>
            </div>

            {/* Sizes */}
            <div className="flex items-center gap-2 flex-wrap">
              <p className="text-base">Size:</p>
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <span
                  key={size}
                  className="border w-[32px] h-[32px] rounded-sm flex justify-center items-center"
                >
                  {size}
                </span>
              ))}
            </div>

            {/* Quantity & Actions */}
            <div className="flex flex-wrap gap-3 items-center">
              {/* Quantity */}
              <div className="flex border rounded overflow-hidden">
                <button
                  onClick={decrement}
                  className="px-3 py-1 text-lg border-r hover:bg-gray-100 cursor-pointer"
                >
                  −
                </button>
                <div className="w-12 flex items-center justify-center">
                  {quantity}
                </div>
                <button
                  onClick={increment}
                  className="px-3 py-1 text-lg bg-[var(--red)] text-white cursor-pointer"
                >
                  +
                </button>
              </div>

              {/* Buy Now */}
              <button
                onClick={() => dispatch(AddToCart({ ...main, quantity }))}
                className="bg-[var(--red)] h-[44px] px-6 text-white rounded cursor-pointer"
              >
                Buy Now
              </button>

              {/* Wishlist */}
              <button className="border p-2 rounded hover:bg-gray-100">
                <BiHeart size={20} />
              </button>
            </div>

            {/* Delivery Box */}
            <div className="border rounded divide-y w-full p-4 space-y-4">
              <div className="flex items-start gap-4">
                <img src={delivery} alt="" className="w-6" />
                <div>
                  <p className="font-medium">Free Delivery</p>
                  <p className="text-xs underline">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 pt-4">
                <img src={deliveryReturn} alt="" className="w-6" />
                <div>
                  <p className="font-medium">30 Days Return</p>
                  <p className="text-xs underline">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Items */}
        <div className="mt-20">
          <div className="flex justify-between items-center mb-6">
            <Top title={"Related Item"} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {Products.slice(0, 4).map((item) => (
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
                      {item.discount ? `$${item.price - item.discount}` : null}
                    </p>
                  </span>
                  <span className="flex items-center gap">
                    {[...Array(5)].map((star, idx) => {
                      return <img src={vector2} key={idx} />;
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Details;
