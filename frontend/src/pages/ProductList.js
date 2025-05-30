import React from "react";

const ProductList = () => {
  const products = [
    {
      name: "Smartphone XYZ",
      price: "899.00 €",
      category: "Électronique",
      stock: 45,
      image: "https://via.placeholder.com/40?text=📱",
    },
    {
      name: "Laptop Pro",
      price: "1299.00 €",
      category: "Électronique",
      stock: 20,
      image: "https://via.placeholder.com/40?text=💻",
    },
    {
      name: "Casque audio",
      price: "199.00 €",
      category: "Accessoires",
      stock: 100,
      image: "https://via.placeholder.com/40?text=🎧",
    },
    {
      name: "Montre connectée",
      price: "299.00 €",
      category: "Accessoires",
      stock: 30,
      image: "https://via.placeholder.com/40?text=⌚",
    },
  ];

  const renderRow = (product, index) =>
    React.createElement(
      "tr",
      { key: index, className: "border-b" },
      React.createElement("td", { className: "p-2" }, 
        React.createElement("img", {
          src: product.image,
          alt: product.name,
          className: "w-10 h-10",
        })
      ),
      React.createElement("td", { className: "p-2" }, product.name),
      React.createElement("td", { className: "p-2" }, product.price),
      React.createElement(
        "td",
        { className: "p-2" },
        React.createElement(
          "span",
          {
            className: `px-2 py-1 text-xs rounded-full ${
              product.category === "Électronique"
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-100 text-gray-700"
            }`,
          },
          product.category
        )
      ),
      React.createElement(
        "td",
        { className: "p-2" },
        React.createElement(
          "span",
          {
            className: `px-2 py-1 text-xs rounded-full ${
              product.stock >= 50
                ? "bg-green-100 text-green-700"
                : product.stock >= 25
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`,
          },
          product.stock
        )
      ),
      React.createElement(
        "td",
        { className: "p-2 space-x-2" },
        React.createElement(
          "button",
          {
            className:
              "text-blue-600 hover:underline text-sm",
            onClick: () => alert(`Modifier ${product.name}`),
          },
          "✏️"
        ),
        React.createElement(
          "button",
          {
            className:
              "text-red-600 hover:underline text-sm",
            onClick: () => alert(`Supprimer ${product.name}`),
          },
          "🗑️"
        )
      )
    );

  return React.createElement(
    "div",
    { className: "p-6 bg-gray-100 min-h-screen" },
    React.createElement(
      "div",
      { className: "flex justify-between items-center mb-6" },
      React.createElement(
        "h1",
        { className: "text-2xl font-bold" },
        "Gestion des produits"
      ),
      React.createElement(
        "button",
        {
          className:
            "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700",
          onClick: () => alert("Ajouter un produit"),
        },
        "+ Ajouter un produit"
      )
    ),
    React.createElement(
      "table",
      { className: "w-full bg-white shadow rounded" },
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          { className: "bg-gray-200 text-left" },
          ["Image", "Nom", "Prix", "Catégorie", "Stock", "Actions"].map((head, i) =>
            React.createElement("th", { key: i, className: "p-2 text-sm font-semibold" }, head)
          )
        )
      ),
      React.createElement("tbody", null, products.map(renderRow))
    )
  );
};

export default ProductList;
