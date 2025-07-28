import React from "react";
import { CategorySide } from "../pages/home/Section1";
import { Outlet } from "react-router-dom";

const CategoryLayout = () => {
  return (
    <div>
      <CategorySide />
      <Outlet />
    </div>
  );
};

export default CategoryLayout;
