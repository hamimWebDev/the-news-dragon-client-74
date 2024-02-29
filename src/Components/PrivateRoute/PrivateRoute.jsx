import React, { useContext } from "react";
import { AuthContext } from "../../layouts/providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/Login" replace></Navigate>;
};

export default PrivateRoute;
