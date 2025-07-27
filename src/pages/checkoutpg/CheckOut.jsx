import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { AddressUpSchema } from "../../utils/ValidationSchema";
import { GiCheckMark } from "react-icons/gi";
import { setShippingAddress } from "../../store/contextSlice";
import { useSelector } from "react-redux";
import Bank from "../../assets/Frame 834.png";

const CheckOut = () => {
  const shippingAddress = useSelector((state) => state.context.shippingAddress);
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [toggle, setToggle] = useState(false);
  const Carts = useSelector((state) => state.productsAuth.cart);
  const [quantities, setQuantities] = useState({});

  console.log(Carts);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  const cartTotal = Carts.reduce((total, item) => {
    const quantity = Number(quantities[item.id]) || 1;
    return total + item.price * quantity;
  }, 0);

  return (
    <div className="container my-32">
      <div>
        <h3 className="font-inter font-medium text-4xl leading-[30px] pb-14 px-3 lg:px-0 ">
          Billing Address
        </h3>
        <div className="flex justify-between flex-col lg:flex-row">
          <div>
            <Formik
              initialValues={{
                name: shippingAddress.firstName || "",
                country: shippingAddress.companyName || "",
                streetName: shippingAddress.streetAddress || "",
                city: shippingAddress.apartment || "",
                state: shippingAddress.town || "",
                zipCode: shippingAddress.phoneNumber || "",
                phoneNumber: shippingAddress.emailAddress || "",
              }}
              validationSchema={AddressUpSchema}
              // onSubmit={storeAddress}
            >
              <Form className="h-[814px] w-[90vw] mx-auto lg:mx-0 lg:w-[470px] flex flex-col justify-between">
                {[
                  { name: "firstName", label: "First Name" },
                  { name: "companyName", label: "Company Name" },
                  { name: "streetAddress", label: "Street Address" },
                  { name: "apartment", label: "Apartment" },
                  { name: "town", label: "Town" },
                  { name: "phoneNumber", label: "Phone Number" },
                  { name: "emailAddress", label: "Email Address" },
                ].map(({ name, label }) => (
                  <div className="flex flex-col gap-2" key={name}>
                    <span className="mediump text-neutral-950/50 ">
                      {label}
                    </span>
                    <Field
                      name={name}
                      type="text"
                      className="h-[50px] w-full rounded bg-[#F5F5F5] "
                    />
                    <ErrorMessage
                      name={name}
                      component="div"
                      className="text-red-400 text-sm"
                    />
                  </div>
                ))}
              </Form>
            </Formik>
            <div className="flex items-center gap-2 mt-3 px-3 lg:px-0 ">
              {toggle ? (
                <GiCheckMark
                  onClick={handleToggle}
                  className="bg-[var(--red)] text-white rounded-sm cursor-pointer text-lg p-1"
                />
              ) : (
                <span
                  onClick={handleToggle}
                  className="h-5 w-5 border border-[#4a4741] block rounded-sm cursor-pointer"
                />
              )}
              <span className="text-[#4a4741] ">
                Save this information for faster check-out next time
              </span>
            </div>
          </div>
          <div className="w-full px-3 lg:px-0 lg:w-[527px]  h-auto lg:h-[600px]  flex flex-col gap-8 ">
            <div className=" w-full lg:w-[425px]  flex flex-col gap-8 ">
              {Carts.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-between h-[54px] w-full "
                  >
                    <span className="h-[54px] w-[54px] flex justify-center items-center ">
                      <img
                        src={item.img}
                        className="w-[48.884212493896484px] h-[42.22222137451172px] "
                      />
                    </span>
                    <span className="w-[347px] h-[24px] flex items-center justify-between ">
                      <p className="mediump">{item.name}</p>
                      <p className="mediump">${item.price}</p>
                    </span>
                  </div>
                );
              })}
              {/* <div className="flex items-center justify-between h-[54px] w-full ">
                <span className="h-[54px] w-[54px] flex justify-center items-center ">
                  <img
                    src="/Frame 611.png"
                    className="w-[48.884212493896484px] h-[42.22222137451172px] "
                  />
                </span>
                <span className="w-[347px] h-[24px] flex items-center justify-between ">
                  <p className="mediump">LCD Monitor</p>
                  <p className="mediump">$650</p>
                </span>
              </div>
              <div className="flex items-center justify-between h-[54px] w-full ">
                <span className="h-[54px] w-[54px] flex justify-center items-center ">
                  <img
                    src="/Frame 608 (1).png"
                    className="w-[48.884212493896484px] h-[42.22222137451172px] "
                  />
                </span>
                <span className="w-[347px] h-[24px] flex items-center justify-between ">
                  <p className="mediump">Boots</p>
                  <p className="mediump">$150</p>
                </span>
              </div> */}
              <div className="h-[136px] w-full lg:w-[422px] flex flex-col justify-between ">
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
              </div>
              <div className="flex items-center justify-between">
                <span
                  onClick={() => setPaymentMethod("bank")}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <span className="w-6 h-6 rounded-full border items-center flex justify-center ">
                    {paymentMethod === "bank" && (
                      <span className="w-3.5 h-3.5 rounded-full bg-black block "></span>
                    )}
                  </span>
                  <p className="mediump">Bank</p>
                </span>
                <img src={Bank} alt="" />
              </div>
              <span className="flex items-center gap-2 cursor-pointer">
                <span
                  onClick={() => setPaymentMethod("cash")}
                  className="w-6 h-6 rounded-full border items-center flex justify-center "
                >
                  {paymentMethod === "cash" && (
                    <span className="w-3.5 h-3.5 rounded-full bg-black block "></span>
                  )}
                </span>
                <p className="mediump">Cash on delivery</p>
              </span>
            </div>
            <div className="flex w-full lg:w-[527px] justify-between gap-4 lg:gap-0 ">
              <input
                type="text"
                name="coupon"
                placeholder="Coupon Code"
                className="border focus:outline-none w-1/2 lg:w-[300px] h-[56px] px-5 rounded "
              />
              <button className="w-1/2 lg:w-[211px] h-[56px] rounded-sm bg-[var(--red)] text-white block mx-0 lg:ml-auto ">
                Apply Coupon
              </button>
            </div>
            <button className="w-[190px] h-[56px] rounded-sm bg-[var(--red)] text-white block mx-auto lg:mx-0">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
