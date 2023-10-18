import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fortawesome/fontawesome-free/js/all.js";

import(
  "https://fonts.googleapis.com/css2?family=Averia+Sans+Libre:ital,wght@0,300;0,400;0,700;1,300&family=Averia+Serif+Libre:wght@300;400;700&family=Cormorant+Garamond:wght@300;400;500;700&display=swap"
);
import(
  "https://fonts.googleapis.com/css2?family=Averia+Sans+Libre:ital,wght@0,300;0,400;0,700;1,300&family=Cormorant+Garamond:wght@300;400;500;700&display=swap"
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
