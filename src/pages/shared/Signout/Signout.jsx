import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { TokenContext } from "../../../context/TokenProvider";

const Signout = () => {
  // Delete Token
  localStorage.removeItem("limitlessToken");
  // Update Token context
  const { token, setToken } = useContext(TokenContext);
  setToken(localStorage.getItem("limitlessToken"));

  console.log(token);
  if (!token) {
    return <Navigate to="/"></Navigate>;
  }
  return null;
};

export default Signout;
