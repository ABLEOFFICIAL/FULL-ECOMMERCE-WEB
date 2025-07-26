import React from "react";
import { LuUser } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { TbLogout2 } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const UserIcon = ({ onClick }) => {
  return <LuUser onClick={onClick} size={25} className="cursor-pointer " />;
};

export default function AccountModal() {
  const toggle = useSelector((state) => state.context.toggle);
  //   console.log(toggle);

  return (
    toggle && (
      <div className="absolute right-0 top-20 w-[224px] h-[208px] flex justify-center items-center p-4 rounded-lg shadow-lg bg-black/30 backdrop-blur-md text-white space-y-4 z-50 ">
        <div className="w-[192px] h-[180px] flex flex-col justify-between ">
          <Link to={"/profile"}>
            <div className="flex items-center space-x-2">
              <UserIcon />
              <p className="smallp">Manage My Account</p>
            </div>
          </Link>
          <Link to={"/orders"}>
            <div className="flex items-center space-x-2">
              <FiShoppingBag size={25} />
              <p className="smallp">My Order</p>
            </div>
          </Link>
          <Link to={"/cancellations"}>
            <div className="flex items-center space-x-2">
              <MdOutlineCancel size={25} />
              <p className="smallp">My Cancellations</p>
            </div>
          </Link>
          <Link to={"/reviews"}>
            <div className="flex items-center space-x-2">
              <CiStar size={25} className="stroke-1" />
              <p className="smallp">My Reviews</p>
            </div>
          </Link>
          <Link to={"/logout"}>
            <div className="flex items-center space-x-2">
              <TbLogout2 size={25} />
              <p className="smallp">Logout</p>
            </div>
          </Link>
        </div>
      </div>
    )
  );
}
