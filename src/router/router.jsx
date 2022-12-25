import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";
import CustomerLists from "../pages/Dashboard/CustomerLists/CustomerLists";
import ProductLists from "../pages/Dashboard/ProductLists/ProductLists";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "product_lists",
        element: <ProductLists />,
      },
      {
        path: "customer_lists",
        element: <CustomerLists />,
      },
    ],
  },
]);
