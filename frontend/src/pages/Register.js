import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return React.createElement(
    "div",
    {
      style: {
        backgroundColor: "#f9fafb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
        fontFamily: "Arial, sans-serif",
      },
    },
    React.createElement(
      "main",
      {
        style: {
          width: "100%",
          maxWidth: "400px",
          background: "white",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
        },
      },
      React.createElement(
        "h1",
        {
          style: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            textAlign: "center",
          },
        },
        "Créer un compte"
      ),
      React.createElement(
        "form",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          },
        },
        React.createElement("input", {
          type: "text",
          placeholder: "Nom complet",
          required: true,
          style: {
            padding: "0.75rem",
            border: "1px solid #d1d5db",
            borderRadius: "6px",
            fontSize: "1rem",
          },
        }),
        React.createElement("input", {
          type: "email",
          placeholder: "Email",
          required: true,
          style: {
            padding: "0.75rem",
            border: "1px solid #d1d5db",
            borderRadius: "6px",
            fontSize: "1rem",
          },
        }),
        React.createElement("input", {
          type: "password",
          placeholder: "Mot de passe",
          required: true,
          style: {
            padding: "0.75rem",
            border: "1px solid #d1d5db",
            borderRadius: "6px",
            fontSize: "1rem",
          },
        }),
        React.createElement(
          "button",
          {
            type: "submit",
            style: {
              backgroundColor: "#3b82f6",
              color: "white",
              padding: "0.75rem",
              border: "none",
              borderRadius: "6px",
              fontSize: "1rem",
              cursor: "pointer",
            },
          },
          "S'inscrire"
        )
      ),
      React.createElement(
        "p",
        {
          style: {
            textAlign: "center",
            fontSize: "0.9rem",
            marginTop: "1rem",
          },
        },
        "Déjà inscrit ? ",
        React.createElement(
          Link,
          {
            to: "/login",
            style: {
              color: "#3b82f6",
              textDecoration: "none",
            },
          },
          "Se connecter"
        )
      )
    )
  );
};

export default Register;
