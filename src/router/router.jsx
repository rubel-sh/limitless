import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";
import AddCustomerForm from "../pages/Dashboard/CustomerLists/AddCustomerForm/AddCustomerForm";
import CustomerLists from "../pages/Dashboard/CustomerLists/CustomerLists";
import AddProductForm from "../pages/Dashboard/ProductLists/AddProductForm/AddProductForm";
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
        path: "",
        element: <CustomerLists />,
      },
      {
        path: "product_lists",
        element: <ProductLists />,
      },
      {
        path: "add_product",
        element: <AddProductForm />,
      },
      {
        path: "customer_lists",
        element: <CustomerLists />,
      },
      {
        path: "add_customer",
        element: <AddCustomerForm />,
      },
    ],
  },
]);
