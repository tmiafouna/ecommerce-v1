import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login.js";
import Register from "../pages/Register.js";
import Checkout from "../pages/Checkout.js";
import Command from "../pages/Command.js";
import ProductList from "../pages/ProductList.js";
import ProductDetail from "../pages/ProductDetail.js";
import PrivateRoute from "../routes/PrivateRoutes.js";
import Navbar from "../components/PublicNavbar.js";

const AppRouter = () => {
  return React.createElement(
    BrowserRouter,
    null,
    React.createElement(
      React.Fragment,
      null,
      React.createElement(Navbar, null),
      React.createElement(
        Routes,
        null,
        React.createElement(Route, {
          path: "/login",
          element: React.createElement(Login),
        }),
        React.createElement(Route, {
          path: "/register",
          element: React.createElement(Register),
        }),
        React.createElement(Route, {
          path: "/products",
          element: React.createElement(
            PrivateRoute,
            null,
            React.createElement(ProductList)
          ),
        }),
        React.createElement(Route, {
          path: "/checkout",
          element: React.createElement(
            PrivateRoute,
            null,
            React.createElement(Checkout)
          ),
        }),
        React.createElement(Route, {
          path: "/orders",
          element: React.createElement(
            PrivateRoute,
            null,
            React.createElement(Command)
          ),
        }),
        React.createElement(Route, {
          path: "*",
          element: React.createElement(Navigate, { to: "/products" }),
        })
      )
    )
  );
};

export default AppRouter;
