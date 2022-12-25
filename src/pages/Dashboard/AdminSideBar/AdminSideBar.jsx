import React from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";

const AdminSideBar = () => {
  const adminNavLinks = [
    { title: "Customer Lists", link: "customer_lists" },
    { title: "Product Lists", link: "product_lists" },
  ];
  return (
    <div className="border p-4 md:h-[80vh] sticky top-1 rounded-md">
      <h2 className="text-xl font-bold mb-10">Admin Dashboard</h2>
      {/* Nav Links */}
      <ul className="flex flex-col gap-5">
        {adminNavLinks.map((item) => (
          <li key={item.link}>
            <NavHashLink
              to={item.link}
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-sky-500"
            >
              {item.title}
            </NavHashLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminSideBar;
