import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes/AppRouter.js";
import { AuthProvider } from "./contexts/AuthContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(
      AuthProvider,
      null,
      React.createElement(AppRouter, null)
    )
  )
);
