import React from "react";
import ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./components/App";

const container = document.querySelector("#root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
