import React from "react";
import img1 from "../../assets/image 46.png";
import img2 from "../../assets/image 51.png";
import img3 from "../../assets/image 47.png";
import x from "../../assets/Icon-Twitter1.png";
import insta from "../../assets/icon-instagram1.png";
import linkedin from "../../assets/Icon-Linkedin1.png";
import circle from "../../assets/Ellipse 3.png";
import circle2 from "../../assets/Group 1000005941.png";

const Board = () => {
  const BOD = [
    {
      name: "Tom Cruise",
      img: img1,
      post: "Founder & Chairman",
    },
    {
      name: "Emma Watson",
      img: img2,
      post: "Managing Director",
    },
    {
      name: "Will Smith",
      img: img3,
      post: "Product Designer",
    },
  ];
  return (
    <div className=" my-40">
      <div className="container flex justify-between mb-20">
        {BOD.map((card, idx) => {
          return (
            <div key={idx} className="w-[370px] h-[564px] flex flex-col gap-8 ">
              <div className="h-[430px] w-[370px] rounded bg-[#F5F5F5] ">
                <img src={card.img} alt="" />
              </div>
              <span>
                <h3 className="font-inter text-[32px] leading-[30px] font-medium ">
                  {card.name}
                </h3>
                <p className="mediump">{card.post}</p>
              </span>
              <span className="flex w-[104px] justify-between ">
                <img src={x} className="h-6 w-6" />
                <img src={insta} className="h-6 w-6" />
                <img src={linkedin} className="h-6 w-6" />
              </span>
            </div>
          );
        })}
      </div>
      <div className=" flex justify-between gap-2 mx-auto w-[110px] items-center ">
        <img src={circle} alt="" />
        <img src={circle} alt="" />
        <img src={circle2} alt="" />
        <img src={circle} alt="" />
        <img src={circle} alt="" />
      </div>
    </div>
  );
};

export default Board;
