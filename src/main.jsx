// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // On importe notre composant principal App
import "./style/main.scss";  // On importe le SCSS global

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
