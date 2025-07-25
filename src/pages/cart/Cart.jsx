import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveFromCart } from "../../store/productSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const [quantities, setQuantities] = useState({});
  const Carts = useSelector((state) => state.productsAuth.cart);
  console.log(Carts);

  const cartTotal = Carts.reduce((total, item) => {
    const quantity = Number(quantities[item.id]) || 1;
    return total + item.price * quantity;
  }, 0);
  const dispatch = useDispatch();

  return (
    <div className="container  h-auto my-32 flex flex-col gap-20 ">
      <div className="w-full flex flex-col gap-6">
        <table className="w-full text-left border-collapse h-auto flex flex-col gap-10 ">
          <thead className="h-[72px] w-full  shadow-md  ">
            <tr className=" flex justify-between items-center  my-auto h-full ">
              <th className="p-2 w-1/4">
                <p className="mediump">Product</p>
              </th>
              <th className="p-2 w-1/4">
                <p className="mediump">Price</p>
              </th>
              <th className="p-2 w-1/4">
                <p className="mediump">Quantity</p>
              </th>
              <th className="p-2 w-1/4">
                <p className="mediump">Subtotal</p>
              </th>
            </tr>
          </thead>
          <tbody className="flex flex-col gap-10">
            {Carts.map((cart) => {
              return (
                <tr
                  key={cart.id}
                  className="h-[102px] shadow-md  flex items-center justify-between "
                >
                  <td className="p-2 flex items-center w-1/4">
                    <span
                      onClick={() => dispatch(RemoveFromCart(cart.id))}
                      className="text-[var(--red)] mr-2 cursor-pointer "
                    >
                      ×
                    </span>
                    <img
                      src={cart.img}
                      alt={cart.name}
                      className="mr-2 w-[54px] h-[54px] bg-center bg-cover "
                    />
                    LCD Monitor
                  </td>
                  <td className="p-2 w-1/4">${cart.price}</td>
                  <td className="p-2 w-1/4">
                    <input
                      type="number"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      min="1"
                      className="w-16 p-1 border rounded"
                      value={quantities[cart.id] ?? 1}
                      onChange={(e) => {
                        const value = e.target.value;

                        // Allow empty string temporarily so user can type freely
                        if (value === "" || /^[0-9]+$/.test(value)) {
                          setQuantities((prev) => ({
                            ...prev,
                            [cart.id]: value, // Keep as string while typing
                          }));
                        }
                      }}
                    />
                  </td>
                  <td className="p-2 w-1/4">
                    ${cart.price * (Number(quantities[cart.id]) || 1)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-between">
          <Link
            to={"/products"}
            className="w-[234px] h-[56px] rounded-sm bg-[var(--white)] text-black border flex justify-center items-center "
          >
            <p className="boldp">Return To Shop</p>
          </Link>
          <Link
            to={"/cart"}
            className="w-[234px] h-[56px] rounded-sm bg-[var(--white)] text-black ml-auto border flex justify-center items-center  "
          >
            <p className="boldp"> Update Cart</p>
          </Link>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex w-[527px] justify-between ">
          <input
            type="text"
            name="coupon"
            placeholder="Coupon Code"
            className="border focus:outline-none w-[300px] h-[56px] px-5 rounded "
          />
          <button className="w-[211px] h-[56px] rounded-sm bg-[var(--red)] text-white block ml-auto ">
            Apply Coupon
          </button>
        </div>
        <div className="w-[470px] h-[324px] border rounded md:w-1/3 mt-6 md:mt-0 md:ml-6 p-5 flex flex-col justify-between">
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
            to={"/checkout"}
            className="w-full py-2 bg-[var(--red)] text-white rounded flex justify-center items-center"
          >
            Proceed to checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
