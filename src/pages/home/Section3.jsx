import React, { useState } from "react";
import { Direction, Top } from "./Section2";
import img1 from "../../assets/Category-CellPhone.png";
import img2 from "../../assets/Category-Computer.png";
import img3 from "../../assets/Category-SmartWatch.png";
import img4 from "../../assets/Category-Camera (1).png";
import img5 from "../../assets/Category-Headphone.png";
import img6 from "../../assets/Category-Gamepad.png";

const Section3 = () => {
  const [selectedCat, setSelectedCat] = useState("Camera");
  return (
    <section className="container px-10 mt-10 flex flex-col gap-[60px] border-b-[1px] border-b-neutral-600/50 pb-20 ">
      <div className="h-[108px] flex justify-between items-end ">
        <div className="h-full flex flex-col justify-between ">
          <Top title="Categories" />
          <h2 className="">Browse By Category</h2>
        </div>
        <Direction className={"hidden md:flex"} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-4">
        {[
          {
            name: "Phones",
            img: img1,
          },
          {
            name: "Computers",
            img: img2,
          },
          {
            name: "Smartwatch",
            img: img3,
          },
          {
            name: "Camera",
            img: img4,
          },
          {
            name: "Headphones",
            img: img5,
          },
          {
            name: "Gaming",
            img: img6,
          },
        ].map((cat, i) => (
          <div
            key={i}
            className={`p-4 border border-neutral-600/50 rounded text-center w-[280px] mx-auto md:w-[170px] h-[200px] md:h-[145px] flex justify-center flex-col ${
              cat.name === selectedCat
                ? "bg-[var(--red)] text-white border-0 "
                : "bg-white"
            }  `}
          >
            <img src={cat.img} className="w-10 h-10 mx-auto mb-2" />
            <p className="meduimp">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
