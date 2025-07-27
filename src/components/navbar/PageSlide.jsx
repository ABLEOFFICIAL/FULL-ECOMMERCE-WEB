import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function PageSlide() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);
  console.log(location.pathname);
  return (
    <div className=" justify-between w-[367px] hidden md:flex">
      <Link to={"/"} className={`mediump ${active === "/" ? "border-b" : ""} `}>
        <p>Home</p>
      </Link>
      <Link
        to={"/contact-us"}
        className={`mediump ${active === "/contact-us" ? "border-b" : ""} `}
      >
        <p>Contact</p>
      </Link>
      <Link
        to={"/about-us"}
        className={`mediump ${active === "/about-us" ? "border-b" : ""} `}
      >
        <p>About</p>
      </Link>
      <Link
        to={"/signup"}
        className={`mediump ${active === "/signup" ? "border-b" : ""} `}
      >
        <p>Sign Up</p>
      </Link>
    </div>
  );
}
