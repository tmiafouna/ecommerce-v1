import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PublicNavbar = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  // Pages publiques concernées par les liens actifs
  const activePaths = ["/", "/login", "/register"];

  return React.createElement(
    "nav",
    {
      style: {
        backgroundColor: "#0f172a",
        color: "white",
        padding: "1.5rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      },
    },
    [
      React.createElement(
        "h1",
        {
          key: "title",
          style: {
            fontSize: "1.4rem",
            fontWeight: "bold",
            margin: 0,
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          },
        },
        "🛒 ShopApp"
      ),
      React.createElement(
        "div",
        {
          key: "links",
          style: {
            display: "flex",
            gap: "1.2rem",
            flexWrap: "wrap",
          },
        },
        !user &&
          [

            React.createElement(
              Link,
              {
                key: "login",
                to: "/login",
                style: linkStyle(location.pathname === "/login"),
              },
              "Connexion"
            ),
            React.createElement(
              Link,
              {
                key: "register",
                to: "/register",
                style: linkStyle(location.pathname === "/register"),
              },
              "Créer un compte"
            ),
          ]
      ),
    ]
  );
};

const linkStyle = (active) => ({
  padding: "10px 16px",
  textDecoration: "none",
  borderRadius: "8px",
  backgroundColor: active ? "#3b82f6" : "transparent",
  color: active ? "#ffffff" : "#cbd5e1",
  transition: "background-color 0.3s ease, color 0.3s ease",
  fontSize: "1rem",
  fontWeight: 500,
});

export default PublicNavbar;
