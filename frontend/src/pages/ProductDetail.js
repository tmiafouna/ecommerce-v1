import React from "react";

const ProductDetail = () => {
  const product = {
    name: "Smartphone XYZ",
    description: "Un smartphone haut de gamme avec écran OLED, 128 Go de stockage et caméra 48 MP.",
    price: "899.00 €",
    stock: 45,
    category: "Électronique",
    image: "https://via.placeholder.com/600x400?text=📱",
  };

  return React.createElement(
    "div",
    {
      style: {
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
        padding: "3rem 1rem",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    React.createElement(
      "div",
      {
        style: {
          backgroundColor: "#ffffff",
          padding: "2.5rem",
          borderRadius: "18px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
          maxWidth: "800px",
          width: "100%",
        },
      },
      React.createElement("img", {
        src: product.image,
        alt: product.name,
        style: {
          width: "100%",
          height: "auto",
          borderRadius: "10px",
          marginBottom: "1.5rem",
        },
      }),
      React.createElement(
        "h1",
        { style: { fontSize: "1.9rem", fontWeight: "bold", marginBottom: "0.6rem" } },
        product.name
      ),
      React.createElement(
        "p",
        { style: { color: "#6b7280", marginBottom: "1.2rem", fontSize: "1rem" } },
        product.description
      ),
      React.createElement(
        "p",
        { style: { fontSize: "1.25rem", fontWeight: "bold", color: "#3b82f6", marginBottom: "1rem" } },
        product.price
      ),
      React.createElement(
        "p",
        null,
        "Catégorie : ",
        React.createElement(
          "span",
          {
            style: {
              backgroundColor: "#e0f2fe",
              color: "#0369a1",
              padding: "0.35rem 0.8rem",
              borderRadius: "999px",
              fontSize: "0.9rem",
            },
          },
          product.category
        )
      ),
      React.createElement(
        "p",
        { style: { marginTop: "0.6rem" } },
        "Stock : ",
        React.createElement(
          "span",
          {
            style: {
              padding: "0.35rem 0.8rem",
              borderRadius: "999px",
              backgroundColor:
                product.stock >= 50
                  ? "#dcfce7"
                  : product.stock >= 25
                  ? "#fef9c3"
                  : "#fee2e2",
              color:
                product.stock >= 50
                  ? "#166534"
                  : product.stock >= 25
                  ? "#92400e"
                  : "#991b1b",
              fontSize: "0.9rem",
            },
          },
          `${product.stock} unités`
        )
      ),
      React.createElement(
        "div",
        { style: { marginTop: "2rem", textAlign: "right" } },
        React.createElement(
          "button",
          {
            onClick: () => window.history.back(),
            style: {
              backgroundColor: "#6b7280",
              color: "#fff",
              padding: "0.6rem 1.2rem",
              borderRadius: "8px",
              fontSize: "0.9rem",
              border: "none",
              cursor: "pointer",
            },
          },
          "← Retour"
        )
      )
    )
  );
};

export default ProductDetail;
