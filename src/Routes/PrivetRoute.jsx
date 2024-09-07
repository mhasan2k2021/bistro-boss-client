import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div>
        loading
        <img src="https://i.sstatic.net/hzk6C.gif" alt="" />
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return (
      <Navigate to="/sign-in" state={{ from: location }} replace></Navigate>
    );
  }
};

export default PrivetRoute;
