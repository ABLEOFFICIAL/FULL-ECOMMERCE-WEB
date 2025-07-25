import React from "react";
import NewsBar from "./NewsBar";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import PathWays from "./PathWays";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="relative">
      <NewsBar />
      <Sidebar />
      <Navbar />
      <PathWays />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
