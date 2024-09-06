import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/sign-in"></Navigate>;
  }
};

export default PrivetRoute;
