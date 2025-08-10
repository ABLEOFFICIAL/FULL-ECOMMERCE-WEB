import React, { useContext, useEffect } from "react";
import NewsBar from "./NewsBar";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import PathWays from "./PathWays";
import Sidebar from "./Sidebar";
import ViewClickedPdt from "./ViewClickedPdt";
import { Context } from "../context/Context";
import { useDispatch } from "react-redux";
import { hideSideBar } from "../store/contextSlice";
import PaymentSuccess from "./PaymentSuccess";

const Layout = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { setSearchValue, accountCategory } = useContext(Context);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setSearchValue("");
    dispatch(hideSideBar());
  }, [pathname, accountCategory]);
  return (
    <div className="relative">
      <NewsBar />
      <Sidebar />
      <ViewClickedPdt />
      <PaymentSuccess />
      <Navbar />
      <PathWays />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
