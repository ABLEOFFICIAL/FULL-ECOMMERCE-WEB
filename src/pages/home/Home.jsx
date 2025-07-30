import React, { useContext } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Services from "./Services";
import { Context } from "../../context/Context";

export const GoogleModal = () => {
  const { googleModal, setGoogleModal } = useContext(Context);

  return (
    googleModal && (
      <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-sm p-6 text-center">
          <h3 className="text-lg font-semibold mb-4 text-green-600">
            Logged in
          </h3>
          <p className="text-gray-600 text-sm mb-5">
            Hey, you have been logged in successfully
          </p>
          <button
            onClick={() => setGoogleModal(false)}
            className="bg-[var(--red)] text-white px-5 py-2 rounded-md transition"
          >
            Ok
          </button>
        </div>
      </div>
    )
  );
};

const Home = () => {
  return (
    <div className="flex flex-col gap-24">
      <GoogleModal />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Services />
    </div>
  );
};

export default Home;
