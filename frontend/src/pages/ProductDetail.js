import React from "react";

const ProductDetail = () => {
  const product = {
    name: "Smartphone XYZ",
    description: "Un smartphone haut de gamme avec écran OLED, 128 Go de stockage et caméra 48 MP.",
    price: "899.00 €",
    stock: 45,
    category: "Électronique",
    image: "https://via.placeholder.com/150?text=📱",
  };

  return React.createElement(
    "div",
    { className: "bg-gray-50 min-h-screen p-6" },
    React.createElement(
      "div",
      { className: "max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md" },
      React.createElement(
        "h1",
        { className: "text-3xl font-bold mb-6 text-center" },
        "Détail du produit"
      ),
      React.createElement(
        "div",
        { className: "flex flex-col md:flex-row gap-6" },
        React.createElement("img", {
          src: product.image,
          alt: product.name,
          className: "w-full md:w-1/3 rounded",
        }),
        React.createElement(
          "div",
          { className: "flex-1" },
          React.createElement(
            "h2",
            { className: "text-xl font-semibold mb-2" },
            product.name
          ),
          React.createElement(
            "p",
            { className: "text-gray-600 mb-4" },
            product.description
          ),
          React.createElement(
            "p",
            { className: "text-lg font-bold mb-2" },
            "Prix : ",
            React.createElement("span", { className: "text-blue-600" }, product.price)
          ),
          React.createElement(
            "p",
            { className: "mb-2" },
            "Catégorie : ",
            React.createElement(
              "span",
              { className: "px-2 py-1 text-sm bg-blue-100 text-blue-700 rounded-full" },
              product.category
            )
          ),
          React.createElement(
            "p",
            null,
            "Stock : ",
            React.createElement(
              "span",
              {
                className: `px-2 py-1 text-sm rounded-full ${
                  product.stock >= 50
                    ? "bg-green-100 text-green-700"
                    : product.stock >= 25
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`,
              },
              product.stock
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "mt-6 flex justify-end" },
        React.createElement(
          "button",
          {
            className: "bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700",
            onClick: () => window.history.back(),
          },
          "← Retour"
        )
      )
    )
  );
};

export default ProductDetail;
