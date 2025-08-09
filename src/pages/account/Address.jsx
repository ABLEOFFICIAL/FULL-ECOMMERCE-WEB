import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddressUpSchema } from "../../utils/ValidationSchema";
import { setUserAddress } from "../../store/AuthSlice";

const CheckoutHeader = ({ header }) => (
  <div className="mb-6">
    <h4 className="text-2xl font-semibold">{header}</h4>
  </div>
);

const ShippingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userAddress = useSelector((state) => state.auth.userAddress);

  const storeAddress = (values) => {
    dispatch(setUserAddress(values)); // Saves to Redux + localStorage
    navigate("/payment"); // Go to next page
  };

  return (
    <section className="max-w-[870px] w-full p-6 lg:p-10 h-auto min-h-[500px] rounded-lg shadow-lg bg-white mx-auto">
      <CheckoutHeader header="Billing Address" />

      <Formik
        enableReinitialize
        initialValues={{
          country: userAddress?.country || "",
          streetName: userAddress?.streetName || "",
          city: userAddress?.city || "",
          state: userAddress?.state || "",
          zipCode: userAddress?.zipCode || "",
          phoneNumber: userAddress?.phoneNumber || "",
        }}
        validationSchema={AddressUpSchema}
        onSubmit={storeAddress}
      >
        {({ isSubmitting }) => (
          <Form className="my-6 grid grid-cols-2 md:grid-cols-2 gap-6">
            {[
              { name: "country", label: "Country" },
              { name: "streetName", label: "Street Name" },
              { name: "city", label: "City" },
              { name: "state", label: "State" },
              { name: "zipCode", label: "Zip Code" },
              { name: "phoneNumber", label: "Phone Number" },
            ].map(({ name, label }) => (
              <div className="relative flex flex-col" key={name}>
                <Field
                  name={name}
                  type="text"
                  placeholder={label}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md 
                             focus:ring-2 focus:ring-[#4a4741] focus:outline-none"
                />
                <ErrorMessage
                  name={name}
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
            ))}

            <div className="col-span-2 flex justify-center mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-[250px] h-[50px] bg-[var(--red)] text-white rounded-md 
                            transition disabled:opacity-70"
              >
                Update Address
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ShippingPage;
