import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCartModal } from "../../store/productSlice";

const AddToCartModal = ({ isOpen, onClose }) => {
  const added = useSelector((state) => state.productsAuth.cartModal);
  console.log(added);
  const dispatch = useDispatch();

  return (
    added && (
      <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-sm p-6 text-center">
          <h3 className="text-lg font-semibold mb-4 text-green-600">
            Item Added to Cart!
          </h3>
          <p className="text-gray-600 text-sm mb-5">
            Your item has been successfully added to the cart.
          </p>
          <button
            onClick={() => dispatch(removeCartModal())}
            className="bg-[var(--red)] text-white px-5 py-2 rounded-md transition"
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default AddToCartModal;
