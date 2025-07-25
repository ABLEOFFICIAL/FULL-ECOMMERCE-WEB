import React from "react";
import { Link } from "react-router-dom";

export default function PageSlide() {
  return (
    <div className=" justify-between w-[367px] hidden md:flex">
      <Link to={"/"} className="mediump">
        <p>Home</p>
      </Link>
      <Link to={"/contact-us"} className="mediump">
        <p>Contact</p>
      </Link>
      <Link to={"/about-us"} className="mediump">
        <p>About</p>
      </Link>
      <Link to={"/signup"} className="mediump">
        <p>Sign Up</p>
      </Link>
    </div>
  );
}
