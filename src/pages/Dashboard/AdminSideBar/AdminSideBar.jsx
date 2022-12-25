import React from "react";
import { HashLink } from "react-router-hash-link";

const AdminSideBar = () => {
  const adminNavLinks = [
    { title: "Customer Lists", link: "customer_lists" },
    { title: "Product Lists", link: "product_lists" },
  ];
  return (
    <div className="border p-4 md:h-[80vh]">
      <h2 className="text-xl font-bold mb-10">Admin Dashboard</h2>
      {/* NavLinks */}
      <ul className="flex flex-col gap-5">
        {adminNavLinks.map((item) => (
          <li>
            <HashLink
              to={item.link}
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-sky-500"
            >
              {item.title}
            </HashLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminSideBar;
