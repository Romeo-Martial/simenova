import React from "react";
import ReactDOM from "react-dom/client";
import AppProviders from "./app/Providers";
import App from "./App";
import "./i18n";
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/utilities.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
);
