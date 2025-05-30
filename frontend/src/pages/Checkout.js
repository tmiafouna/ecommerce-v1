import React from "react";

const Checkout = () => {
  return React.createElement(
    "div",
    { className: "bg-gray-50 min-h-screen" },
    React.createElement(PublicNavbar),
    React.createElement(
      "div",
      {
        className:
          "flex justify-center items-center",
      },
      React.createElement(
        "div",
        {
          className:
            "bg-white p-8 rounded-lg shadow-md w-full max-w-lg",
        },
        React.createElement(
          "h1",
          { className: "text-2xl font-bold mb-6 text-center" },
          "Valider ma commande"
        ),
        React.createElement(
          "form",
          { className: "space-y-4" },
          React.createElement("input", {
            type: "text",
            placeholder: "Nom complet",
            className: "w-full px-4 py-2 border rounded-md",
            required: true,
          }),
          React.createElement("input", {
            type: "email",
            placeholder: "Email",
            className: "w-full px-4 py-2 border rounded-md",
            required: true,
          }),
          React.createElement("input", {
            type: "text",
            placeholder: "Adresse de livraison",
            className: "w-full px-4 py-2 border rounded-md",
            required: true,
          }),
          React.createElement(
            "button",
            {
              type: "submit",
              className:
                "w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700",
            },
            "Payer"
          )
        )
      )
    )
  );
};

export default Checkout;
