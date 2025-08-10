import React from "react";
import { Checkout, hidePaymentSuccess } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const success = useSelector((state) => state.productsAuth.paymentSuccess);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    success && (
      <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-sm p-6 text-center">
          <h3 className="text-lg font-semibold mb-4 text-green-600">Success</h3>
          <p className="text-gray-600 text-sm mb-5">
            Your order has been placed successfully.
          </p>
          <button
            onClick={() => {
              dispatch(hidePaymentSuccess());
              dispatch(Checkout());
              navigate("/products");
            }}
            className="bg-[var(--red)] text-white px-5 py-2 rounded-md transition"
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default PaymentSuccess;
