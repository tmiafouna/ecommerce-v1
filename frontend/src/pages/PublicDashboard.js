import React from "react";
import PublicNavbar from "../components/PublicNavbar";

const PublicDashboard = () => {
  const stats = [
    { label: "Total commandes", value: 3, icon: "🧾" },
    { label: "Montant total", value: "2 995 €", icon: "💳" },
    { label: "Produits", value: 4, icon: "📦" },
    { label: "Commandes en attente", value: 1, icon: "⏳" },
  ];

  const recentOrders = [
    { id: "#1003", name: "Pierre Durand", amount: "598.00 €", status: "En attente" },
    { id: "#1002", name: "Marie Martin", amount: "1 299.00 €", status: "En cours" },
    { id: "#1001", name: "Jean Dupont", amount: "1 098.00 €", status: "Livré" },
  ];

  const getStatusColor = (status) => {
    if (status === "Livré") return "#16a34a";
    if (status === "En cours") return "#2563eb";
    return "#ca8a04";
  };

  return React.createElement(
    "div",
    {
      style: {
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      },
    },
    [
      // Titre
      React.createElement(
        "h1",
        {
          key: "title",
          style: {
            fontSize: "2.2rem",
            fontWeight: "bold",
            textAlign: "center",
            margin: "2rem 0",
          },
        },
        "Tableau de bord"
      ),

      // Statistiques
      React.createElement(
        "div",
        {
          key: "stats",
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            maxWidth: "1200px",
            margin: "0 auto 3rem auto",
            padding: "0 1rem",
          },
        },
        stats.map((stat, index) =>
          React.createElement(
            "div",
            {
              key: index,
              style: {
                backgroundColor: "white",
                padding: "1.5rem",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
            },
            [
              React.createElement(
                "div",
                {
                  key: "icon",
                  style: {
                    fontSize: "2rem",
                    marginBottom: "0.5rem",
                  },
                },
                stat.icon
              ),
              React.createElement(
                "div",
                {
                  key: "value",
                  style: {
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "0.3rem",
                  },
                },
                stat.value
              ),
              React.createElement(
                "div",
                {
                  key: "label",
                  style: {
                    fontSize: "1rem",
                    color: "#6b7280",
                  },
                },
                stat.label
              ),
            ]
          )
        )
      ),

      // Commandes récentes
      React.createElement(
        "div",
        {
          key: "ordersContainer",
          style: {
            backgroundColor: "white",
            maxWidth: "800px",
            margin: "0 auto",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.06)",
          },
        },
        [
          React.createElement(
            "h2",
            {
              key: "ordersTitle",
              style: {
                fontSize: "1.4rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
              },
            },
            "Commandes récentes"
          ),
          ...recentOrders.map((order, i) =>
            React.createElement(
              "div",
              {
                key: i,
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem",
                  borderBottom: "1px solid #e5e7eb",
                  paddingBottom: "0.8rem",
                },
              },
              [
                React.createElement(
                  "div",
                  { key: "info", style: { fontSize: "1rem" } },
                  `${order.id} - ${order.name}`
                ),
                React.createElement(
                  "div",
                  { key: "amount", style: { fontWeight: "bold" } },
                  order.amount
                ),
                React.createElement(
                  "span",
                  {
                    key: "status",
                    style: {
                      padding: "0.3rem 0.8rem",
                      borderRadius: "999px",
                      fontSize: "0.85rem",
                      fontWeight: "500",
                      backgroundColor: "#f1f5f9",
                      color: getStatusColor(order.status),
                    },
                  },
                  order.status
                ),
              ]
            )
          ),
        ]
      ),
    ]
  );
};

export default PublicDashboard;
