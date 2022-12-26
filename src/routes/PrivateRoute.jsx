import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("limitlessToken");
  if (!token) {
    return <Navigate to="/signup" />;
  }
  return children;
};

export default PrivateRoute;
