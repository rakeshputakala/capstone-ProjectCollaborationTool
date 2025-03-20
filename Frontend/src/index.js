import React from "react";
import ReactDOM from "react-dom/client"; // <-- Import from "react-dom/client"
import AppRouter from "./Router"; // Ensure this is correctly imported

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
