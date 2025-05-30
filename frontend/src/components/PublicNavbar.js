import React from "react";
import { Link } from "react-router-dom";

const PublicNavbar = () =>
  React.createElement(
    "nav",
    {
      style: {
        backgroundColor: "#0f172a",
        color: "white",
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif", // ✅ police appliquée ici
      },
    },
    [
      React.createElement(
        "h1",
        {
          key: "title",
          style: {
            fontSize: "1.25rem",
            fontWeight: "bold",
            margin: 0,
            color: "white",
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
            gap: "1rem",
          },
        },
        [
          React.createElement(
            Link,
            {
              key: "home",
              to: "/",
              style: linkStyle(false),
            },
            "Accueil"
          ),
          React.createElement(
            Link,
            {
              key: "login",
              to: "/login",
              style: linkStyle(false),
            },
            "Connexion"
          ),
          React.createElement(
            Link,
            {
              key: "register",
              to: "/register",
              style: linkStyle(false),
            },
            "Créer un compte"
          ),
        ]
      ),
    ]
  );

const linkStyle = (active) => ({
  padding: "10px 15px",
  textDecoration: "none",
  borderRadius: "8px",
  backgroundColor: active ? "#3b82f6" : "transparent",
  color: active ? "#ffffff" : "#cbd5e1",
  transition: "background-color 0.3s ease, color 0.3s ease",
  fontSize: "1rem",
  fontWeight: 500,
  fontFamily: "Arial, sans-serif", // ✅ pour les liens aussi
});

export default PublicNavbar;
