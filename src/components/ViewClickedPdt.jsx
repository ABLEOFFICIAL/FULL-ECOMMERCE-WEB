import React from "react";
import { useProducts } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";
import {
  hideClickedProduct,
  AddToCart,
  AddToWishlist,
} from "../store/productSlice";

const ViewClickedPdt = () => {
  const Products = useProducts();
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.productsAuth.wishlist);
  const clickedProduct = useSelector(
    (state) => state.productsAuth.clickedProduct
  );

  const selected = Products.find((item) => item.id === clickedProduct);

  if (!selected) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      {/* Modal Container */}
      <div className="flex flex-col items-center gap-10">
        {/* Close Button */}
        <FaTimes
          onClick={() => {
            dispatch(hideClickedProduct());
          }}
          className="bg-white p-2 size-9 rounded-full ml-auto"
        />

        <div>
          <img
            src={selected.img}
            alt={selected.name}
            className="h-[40vh] w-[50vh] bg-white rounded-lg object-contain p-10"
          />
        </div>
        <div className="flex gap-5 items-center">
          {selected.images.map((img, idx) => {
            return (
              <img
                key={idx}
                src={img}
                className="md:w-28 w-16 md:h-28 h-16 bg-white rounded-lg object-contain p-4"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ViewClickedPdt;
