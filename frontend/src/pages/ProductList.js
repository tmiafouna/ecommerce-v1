import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Smartphone XYZ",
    price: "899.00 €",
    category: "Électronique",
    stock: 45,
    image: "https://via.placeholder.com/300?text=📱",
  },
  {
    name: "Laptop Pro",
    price: "1299.00 €",
    category: "Électronique",
    stock: 20,
    image: "https://via.placeholder.com/300?text=💻",
  },
  {
    name: "Casque audio",
    price: "199.00 €",
    category: "Accessoires",
    stock: 100,
    image: "https://via.placeholder.com/300?text=🎧",
  },
  {
    name: "Montre connectée",
    price: "299.00 €",
    category: "Accessoires",
    stock: 30,
    image: "https://via.placeholder.com/300?text=⌚",
  },
];

const ProductList = () => {
  return React.createElement(
    "div",
    {
      style: {
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
        padding: "4rem 2rem 2rem 2rem", // déplacé un peu plus en bas
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },
    React.createElement(
      "h1",
      {
        style: {
          fontSize: "2.5rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "3rem",
        },
      },
      "Nos produits disponibles"
    ),
    React.createElement(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2.5rem",
          width: "100%",
          maxWidth: "1300px",
        },
      },
      products.map((product, i) =>
        React.createElement(
          "div",
          {
            key: i,
            style: {
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
              padding: "1.5rem",
              textAlign: "center",
              transition: "transform 0.2s ease-in-out",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            },
            onMouseEnter: (e) => (e.currentTarget.style.transform = "scale(1.03)"),
            onMouseLeave: (e) => (e.currentTarget.style.transform = "scale(1)"),
          },
          React.createElement("img", {
            src: product.image,
            alt: product.name,
            style: {
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              marginBottom: "1rem",
            },
          }),
          React.createElement(
            "h2",
            {
              style: {
                fontSize: "1.25rem",
                fontWeight: "700",
                marginBottom: "0.5rem",
              },
            },
            product.name
          ),
          React.createElement(
            "p",
            {
              style: {
                color: "#555",
                marginBottom: "1.25rem",
                fontSize: "1rem",
              },
            },
            product.price
          ),
          React.createElement(
            "div",
            {
              style: {
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                marginTop: "1.5rem",
              },
            },
            React.createElement(
              "span",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.85rem",
                  backgroundColor: "#e0f2fe",
                  color: "#0369a1",
                  padding: "0.5rem 1rem",
                  borderRadius: "999px",
                  minWidth: "100px",
                  textAlign: "center",
                },
              },
              product.category
            ),
            React.createElement(
              Link,
              {
                to: `/products/${i}`,
                style: {
                  backgroundColor: "#3b82f6",
                  color: "#fff",
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                },
              },
              "Voir détails"
            )
          )
        )
      )
    )
  );
};

export default ProductList;
