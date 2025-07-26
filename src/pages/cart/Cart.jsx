import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveFromCart } from "../../store/productSlice";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

export const CartImg = ({ className }) => {
  return <MdOutlineShoppingCart className={className} />;
};

const Cart = () => {
  const [quantities, setQuantities] = useState({});
  const Carts = useSelector((state) => state.productsAuth.cart);
  const dispatch = useDispatch();

  const cartTotal = Carts.reduce((total, item) => {
    const quantity = Number(quantities[item.id]) || 1;
    return total + item.price * quantity;
  }, 0);

  return (
    <>
      {Carts.length !== 0 ? (
        <div className="container h-auto md:my-16 my-5 flex flex-col gap-10 px-3">
          {/* Cart Table / Cards */}
          <div className="w-full flex flex-col gap-6">
            {/* Table header for desktop only */}
            <table className="hidden md:table w-full text-left border-collapse">
              <thead className="h-[72px] w-full shadow-md flex items-center justify-between">
                <tr className="flex justify-between items-center w-full h-full">
                  <th className="p-2 w-1/4">Product</th>
                  <th className="p-2 w-1/4">Price</th>
                  <th className="p-2 w-1/4">Quantity</th>
                  <th className="p-2 w-1/4">Subtotal</th>
                </tr>
              </thead>
              <tbody className="flex flex-col gap-6">
                {Carts.map((cart) => (
                  <tr
                    key={cart.id}
                    className="h-[102px] shadow-md flex items-center justify-between"
                  >
                    <td className="p-2 flex items-center w-1/4">
                      <span
                        onClick={() => dispatch(RemoveFromCart(cart.id))}
                        className="text-[var(--red)] mr-2 cursor-pointer"
                      >
                        ×
                      </span>
                      <img
                        src={cart.img}
                        alt={cart.name}
                        className="mr-2 w-[54px] h-[54px] object-cover"
                      />
                      LCD Monitor
                    </td>
                    <td className="p-2 w-1/4">${cart.price}</td>
                    <td className="p-2 w-1/4">
                      <input
                        type="number"
                        inputMode="numeric"
                        min="1"
                        className="w-16 p-1 border rounded"
                        value={quantities[cart.id] ?? 1}
                        onChange={(e) =>
                          setQuantities((prev) => ({
                            ...prev,
                            [cart.id]: e.target.value,
                          }))
                        }
                      />
                    </td>
                    <td className="p-2 w-1/4">
                      ${cart.price * (Number(quantities[cart.id]) || 1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Mobile Card View */}
            <div className="flex flex-col gap-6 md:hidden">
              {Carts.map((cart) => (
                <div
                  key={cart.id}
                  className="shadow-md border rounded p-4 flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={cart.img}
                        alt={cart.name}
                        className="w-16 h-16 object-cover"
                      />
                      <p className="font-medium text-sm">LCD Monitor</p>
                    </div>
                    <button
                      onClick={() => dispatch(RemoveFromCart(cart.id))}
                      className="text-[var(--red)] text-xl font-bold"
                    >
                      ×
                    </button>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price:</span>
                    <span>${cart.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Quantity:</span>
                    <input
                      type="number"
                      min="1"
                      value={quantities[cart.id] ?? 1}
                      onChange={(e) =>
                        setQuantities((prev) => ({
                          ...prev,
                          [cart.id]: e.target.value,
                        }))
                      }
                      className="w-16 p-1 border rounded text-center"
                    />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span>
                      ${cart.price * (Number(quantities[cart.id]) || 1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <Link
                to="/products"
                className="w-full md:w-[234px] h-[56px] rounded-sm bg-[var(--white)] text-black border flex justify-center items-center"
              >
                Return To Shop
              </Link>
              <Link
                to="/cart"
                className="w-full md:w-[234px] h-[56px] rounded-sm bg-[var(--white)] text-black border flex justify-center items-center"
              >
                Update Cart
              </Link>
            </div>
          </div>

          {/* Coupon + Summary */}
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="flex flex-col md:flex-row w-full md:w-[527px] gap-4">
              <input
                type="text"
                name="coupon"
                placeholder="Coupon Code"
                className="border focus:outline-none w-full h-[56px] px-5 rounded"
              />
              <button className="w-full md:w-[211px] h-[56px] rounded-sm bg-[var(--red)] text-white">
                Apply Coupon
              </button>
            </div>

            <div className="w-full md:w-[470px] border rounded p-5 flex flex-col justify-between">
              <h3 className="font-poppins text-[20px] leading-7 font-medium mb-4">
                Cart Total
              </h3>
              <div className="flex justify-between pb-2 mb-2 border-b">
                <span>Subtotal:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pb-2 mb-2 border-b">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between pb-2 mb-2">
                <span>Total:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <Link
                to="/checkout"
                className="w-full py-2 bg-[var(--red)] text-white rounded flex justify-center items-center mt-4"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="container px-3 md:px-0 flex justify-center items-center my-10 ">
          <div className="w-[300px] min-h-[300px] rounded shadow-md flex flex-col items-center gap-5 p-10 justify-center">
            <CartImg className="size-10" />
            <h3 className="font-poppins font-semibold text-lg ">
              Your Cart Is Empty
            </h3>
            <Link
              to={"/shop"}
              className="w-full md:w-[211px] h-[56px] rounded-sm bg-[var(--red)] text-white flex justify-center items-center"
            >
              <p className="mediump">Return to Shop</p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
