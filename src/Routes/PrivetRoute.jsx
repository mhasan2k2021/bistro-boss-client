import React, { useContext } from "react";
import AuthProvider from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user } = useContext(AuthProvider);
  if (user) {
    return children;
  }
  return <Navigate to="/sign-in"></Navigate>;
};

export default PrivetRoute;
