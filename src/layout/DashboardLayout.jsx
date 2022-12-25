import React from "react";
import { Outlet } from "react-router-dom";
import LimitlessFooter from "../pages/shared/LimitlessFooter/LimitlessFooter";
import LimitlessNav from "../pages/shared/LimitlessNav/LimitlessNav";

const DashboardLayout = () => {
  return (
    <>
      <LimitlessNav />
      <Outlet />
      <LimitlessFooter />
    </>
  );
};

export default DashboardLayout;
