import React from "react";
import { useSelector } from "react-redux";

const AddToCartModal = ({ isOpen, onClose }) => {
  const added = useSelector((state) => state.productsAuth.cartModal);
  console.log(added);

  return (
    added && (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-sm p-6 text-center">
          <h2 className="text-lg font-semibold mb-4 text-green-600">
            Item Added to Cart!
          </h2>
          <p className="text-gray-600 text-sm mb-5">
            Your item has been successfully added to the cart.
          </p>
          <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-neutral-800 transition">
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default AddToCartModal;
