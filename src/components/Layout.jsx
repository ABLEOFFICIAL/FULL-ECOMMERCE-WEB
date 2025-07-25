import React from "react";
import NewsBar from "./NewsBar";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import PathWays from "./PathWays";

const Layout = () => {
  return (
    <div>
      <NewsBar />
      <Navbar />
      <PathWays />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
