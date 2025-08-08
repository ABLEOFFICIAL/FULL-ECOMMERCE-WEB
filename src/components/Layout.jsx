import React, { useEffect } from "react";
import NewsBar from "./NewsBar";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import PathWays from "./PathWays";
import Sidebar from "./Sidebar";
import ViewClickedPdt from "./ViewClickedPdt";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
