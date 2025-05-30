import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext.js";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return React.createElement(
      "div",
      { className: "text-center p-10" },
      "Chargement..."
    );
  }

  return user ? children : React.createElement(Navigate, { to: "/login" });
};

export default PrivateRoute;
