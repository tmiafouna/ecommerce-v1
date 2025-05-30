import React from "react";
import PublicNavbar from "../components/PublicNavbar";

const orders = [
  {
    id: "#1001",
    product: "Laptop Pro",
    amount: "1299.00 €",
    date: "2024-05-01",
    status: "Livré",
  },
  {
    id: "#1002",
    product: "Casque Audio",
    amount: "199.00 €",
    date: "2024-05-12",
    status: "En cours",
  },
  {
    id: "#1003",
    product: "Smartphone XYZ",
    amount: "899.00 €",
    date: "2024-05-21",
    status: "En attente",
  },
];

const getStatusColor = (status) => {
  if (status === "Livré") return "#16a34a";
  if (status === "En cours") return "#2563eb";
  return "#ca8a04";
};

const OrderHistory = () => {
  return React.createElement(
    "div",
    {
      style: {
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
        padding: "4rem 2rem 2rem 2rem",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },
    [   
      React.createElement(
        "h1",
        {
          key: "title",
          style: {
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "3rem",
            marginTop: "1rem",
          },
        },
        "Historique de mes commandes"
      ),

      React.createElement(
        "div",
        {
          key: "grid",
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2.5rem",
            width: "100%",
            maxWidth: "1300px",
          },
        },
        orders.map((order, i) =>
          React.createElement(
            "div",
            {
              key: i,
              style: {
                background: "#fff",
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                padding: "1.5rem",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.2s ease-in-out",
              },
              onMouseEnter: (e) => (e.currentTarget.style.transform = "scale(1.03)"),
              onMouseLeave: (e) => (e.currentTarget.style.transform = "scale(1)"),
            },
            [
              React.createElement(
                "h2",
                {
                  key: "id",
                  style: { fontSize: "1.2rem", fontWeight: "700", marginBottom: "0.5rem" },
                },
                `${order.id}`
              ),
              React.createElement(
                "p",
                {
                  key: "product",
                  style: { fontSize: "1rem", marginBottom: "0.5rem", color: "#1f2937" },
                },
                `Produit : ${order.product}`
              ),
              React.createElement(
                "p",
                {
                  key: "amount",
                  style: { fontSize: "1rem", marginBottom: "0.5rem", color: "#1f2937" },
                },
                `Montant : ${order.amount}`
              ),
              React.createElement(
                "p",
                {
                  key: "date",
                  style: { fontSize: "0.95rem", marginBottom: "0.5rem", color: "#6b7280" },
                },
                `Date : ${order.date}`
              ),
              React.createElement(
                "span",
                {
                  key: "status",
                  style: {
                    marginTop: "0.5rem",
                    backgroundColor: "#f1f5f9",
                    padding: "0.4rem 1rem",
                    borderRadius: "999px",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    color: getStatusColor(order.status),
                    display: "inline-block",
                  },
                },
                order.status
              ),
            ]
          )
        )
      ),
    ]
  );
};

export default OrderHistory;
