import React from "react";

const Command = () => {
  const orders = [
    { id: "#1001", product: "Laptop Pro", amount: 1299, status: "Livré" },
    { id: "#1002", product: "Casque Audio", amount: 199, status: "En cours" },
    { id: "#1003", product: "Smartphone XYZ", amount: 899, status: "En attente" },
  ];

  const getStatusClass = (status) => {
    if (status === "Livré") return "text-green-600";
    if (status === "En cours") return "text-blue-600";
    return "text-yellow-600";
  };

  const orderList = orders.map((order) =>
    React.createElement(
      "li",
      { key: order.id, className: "border-b pb-4" },
      React.createElement(
        "div",
        { className: "flex justify-between" },
        React.createElement("span", { className: "font-medium" }, `${order.id} - ${order.product}`),
        React.createElement("span", null, `${order.amount} €`)
      ),
      React.createElement("span", { className: `text-sm ${getStatusClass(order.status)}` }, order.status)
    )
  );

  return React.createElement(
    "div",
    { className: "bg-gray-50 min-h-screen" },
    React.createElement(PublicNavbar),
    React.createElement(
      "div",
      { className: "max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md" },
      React.createElement("h2", { className: "text-2xl font-bold mb-6 text-center" }, "Mes commandes"),
      React.createElement("ul", { className: "space-y-4" }, orderList)
    )
  );
};

export default Command;
