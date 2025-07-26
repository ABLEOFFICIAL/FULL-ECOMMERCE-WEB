import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex justify-center items-center text-center">
      <span className="flex flex-col gap-4 md:gap-10">
        <p className="errorp ">404 Not Found</p>
        <p className="mediump w-4/5 mx-auto md:w-full">
          Your visited page not found. You may go home page.
        </p>
        <Link to={"/"} className="errorbtn block w-[254px] mx-auto ">
          <p className="mediump">Back to home page</p>
        </Link>
      </span>
    </div>
  );
};

export default NotFound;
