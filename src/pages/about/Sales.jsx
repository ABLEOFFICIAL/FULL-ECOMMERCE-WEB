import React, { useState } from "react";
import img1 from "../../assets/Services1.png";
import img2 from "../../assets/Services (11).png";
import img3 from "../../assets/Services (12).png";
import img4 from "../../assets/Services (3).png";

const Sales = () => {
  const [selectedSale, setSelectedSale] = useState("two");
  const sales = [
    {
      img: img1,
      name: "one",
      count: 10.5,
      text: "Sallers active our site",
    },
    {
      img: img2,
      name: "two",
      count: 33,
      text: "Mopnthly Produduct Sale",
    },
    {
      img: img3,
      name: "three",
      count: 45.5,
      text: "Customer active in our site",
    },
    {
      img: img4,
      name: "four",
      count: 25,
      text: "Anual gross sale in our site",
    },
  ];
  return (
    <div className="container flex justify-between my-24 ">
      {sales.map((sale, idx) => {
        return (
          <div
            key={idx}
            className={`h-[230px] w-[270px] rounded border-neutral-900/30 flex flex-col justify-around items-center ${
              selectedSale === sale.name
                ? "bg-[var(--red)] text-white"
                : "bg-white border"
            } `}
          >
            <img src={sale.img} alt="" />
            <h3 className="font-inter text-[32px] leading-[30px] font-bold ">
              {sale.count}k
            </h3>
            <p className="mediump">{sale.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sales;
