import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const userData = useSelector((state) => state.auth.userData);
  // console.log(userData);

  // 🛑 Don't render breadcrumbs on homepage
  if (location.pathname === "/" || location.pathname === "/products") {
    return null;
  }

  const formatLabel = (value) => {
    return value
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div
      className={`container ${
        location.pathname === "/profile"
          ? "flex items-center justify-between"
          : "block"
      } `}
    >
      <div className="text-gray-500 text-lg px-4 py-3 my-4 md:my-7 flex gap-2 flex-wrap items-center ">
        <Link to="/" className="hover:underline">
          Account
        </Link>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <React.Fragment key={to}>
              <span>/</span>
              {isLast ? (
                <span className="font-semibold text-black">
                  {formatLabel(value)}
                </span>
              ) : (
                <Link to={to} className="hover:underline">
                  {formatLabel(value)}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div
        className={`smallp ${
          location.pathname === "/profile" ? "block" : "hidden"
        }`}
      >
        Welcome!
        <span className="text-[var(--red)] font-medium "> {userData.name}</span>
      </div>
    </div>
  );
};

export default Breadcrumbs;
