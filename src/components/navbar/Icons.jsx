import React from "react";
import wishlist from "../../assets/Wishlist.png";
import cart from "../../assets/Cart1.png";
import user from "../../assets/user.png";
import { useDispatch, useSelector } from "react-redux";
import { showProfile } from "../../store/contextSlice";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";

export const Like = ({ className }) => {
  return <CiHeart className={className} />;
};
export const Unlike = ({ className }) => {
  return <IoMdHeart className={className} />;
};

export default function Icons() {
  const toggle = useSelector((state) => state.context.toggle);
  const dispatch = useDispatch();

  // console.log(toggle);

  return (
    <div className="flex items-center gap-4">
      <Link to={"/wishlist"}>
        <Like className={"bg-white size-8 p-1 rounded-full stroke-1 "} />{" "}
      </Link>
      <Link to={"/cart"}>
        <img src={cart} className="md:w-8 w-6 cursor-pointer " />
      </Link>
      <img
        onClick={() => dispatch(showProfile())}
        src={user}
        className="md:w-8 w-6 cursor-pointer "
      />
    </div>
  );
}
