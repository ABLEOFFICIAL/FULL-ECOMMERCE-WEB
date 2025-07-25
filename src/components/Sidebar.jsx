import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { hideSideBar } from "../store/contextSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const sideBar = useSelector((state) => state.context.sideBar);
  console.log(sideBar);

  return (
    sideBar && (
      <div className="absolute min-h-screen w-[90vw] top-0 right-0 z-40 bg-white p-10 ">
        <span className="flex justify-end">
          <FaTimes onClick={() => dispatch(hideSideBar())} size={30} />
        </span>
        <div className="text-xl font-medium flex flex-col gap-7">
          <Link to={"/"} className="">
            <p>Home</p>
          </Link>
          <Link to={"/contact-us"} className="">
            <p>Contact</p>
          </Link>
          <Link to={"/about-us"} className="">
            <p>About</p>
          </Link>
          <Link to={"/signup"} className="">
            <p>Sign Up</p>
          </Link>
        </div>
      </div>
    )
  );
};

export default Sidebar;
