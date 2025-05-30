import React from "react";

const Login = () => {
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
        fontFamily: "Arial, sans-serif"
      }
    },
    React.createElement(
      "main",
      { className: "public-main", style: { width: "100%", maxWidth: "400px", background: "white", padding: "2rem", borderRadius: "12px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)" } },
      React.createElement("h1", { className: "auth-title", style: { fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1.5rem", textAlign: "center" } }, "Connexion") ,
      React.createElement(
        "form",
        { className: "auth-form", style: { display: "flex", flexDirection: "column", gap: "1rem" } },
        React.createElement("input", {
          type: "email",
          placeholder: "Email",
          required: true,
          style: { padding: "0.75rem", border: "1px solid #d1d5db", borderRadius: "6px", fontSize: "1rem" }
        }),
        React.createElement("input", {
          type: "password",
          placeholder: "Mot de passe",
          required: true,
          style: { padding: "0.75rem", border: "1px solid #d1d5db", borderRadius: "6px", fontSize: "1rem" }
        }),
        React.createElement("button", {
          type: "submit",
          className: "auth-btn",
          style: {
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "0.75rem",
            border: "none",
            borderRadius: "6px",
            fontSize: "1rem",
            cursor: "pointer"
          }
        }, "Se connecter"),
        React.createElement(
          "p",
          { className: "auth-link", style: { textAlign: "center", fontSize: "0.9rem" } },
          "Pas encore inscrit ? ",
          React.createElement(
            "a",
            { href: "/register", style: { color: "#3b82f6", textDecoration: "none" } },
            "Créer un compte"
          )
        )
      )
    )
  );
};

export default Login;
