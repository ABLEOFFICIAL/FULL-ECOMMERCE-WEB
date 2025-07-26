import React from "react";
import { Link } from "react-router-dom";

const FooterNav = () => {
  return (
    <div className="flex md:hidden fixed bottom-1.5 left-0 right-0 justify-between items-center">
      <Link to={"/profile"}>
        <div className="flex flex-col justify-center gap-1 items-center space-x-2">
          <LuUser size={25} />
          <p className="smallp">Manage My Account</p>
        </div>
      </Link>
      <Link to={"/orders"}>
        <div className="flex flex-col justify-center gap-1 items-center space-x-2">
          <FiShoppingBag size={25} />
          <p className="smallp">My Order</p>
        </div>
      </Link>
      <Link to={"/cancellations"}>
        <div className="flex flex-col justify-center gap-1 items-center space-x-2">
          <MdOutlineCancel size={25} />
          <p className="smallp">My Cancellations</p>
        </div>
      </Link>
      <Link to={"/reviews"}>
        <div className="flex flex-col justify-center gap-1 items-center space-x-2">
          <CiStar size={25} className="stroke-1" />
          <p className="smallp">My Reviews</p>
        </div>
      </Link>
      <Link to={"/logout"}>
        <div className="flex flex-col justify-center gap-1 items-center space-x-2">
          <TbLogout2 size={25} />
          <p className="smallp">Logout</p>
        </div>
      </Link>
    </div>
  );
};

export default FooterNav;
