import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"} className="logo flex justify-start items-center">
      Exclusive
    </Link>
  );
}
