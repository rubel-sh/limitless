import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../components/Container";
import AdminSideBar from "../pages/Dashboard/AdminSideBar/AdminSideBar";
import LimitlessFooter from "../pages/shared/LimitlessFooter/LimitlessFooter";
import LimitlessNav from "../pages/shared/LimitlessNav/LimitlessNav";

const DashboardLayout = () => {
  return (
    <>
      <LimitlessNav />
      <Container>
        <div className="grid  md:grid-cols-4">
          {/* Left Navbar */}
          <aside className="col-span-4 md:col-span-1">
            <AdminSideBar />
          </aside>
          {/* Right Main section */}
          <main className="col-span-4 md:col-span-3">
            <Outlet />
          </main>
        </div>
      </Container>
      <LimitlessFooter />
    </>
  );
};

export default DashboardLayout;
