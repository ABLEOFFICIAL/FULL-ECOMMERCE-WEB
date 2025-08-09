import React, { useContext, useEffect } from "react";
import NewsBar from "./NewsBar";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import PathWays from "./PathWays";
import Sidebar from "./Sidebar";
import ViewClickedPdt from "./ViewClickedPdt";
import { Context } from "../context/Context";

const Layout = () => {
  const { pathname } = useLocation();
  const { setSearchValue } = useContext(Context);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setSearchValue("");
  }, [pathname]);
  return (
    <div className="relative">
      <NewsBar />
      <Sidebar />
      <ViewClickedPdt />
      <Navbar />
      <PathWays />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
