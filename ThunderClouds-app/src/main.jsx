import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./FirstApp";
//import { LoveApp } from "./LoveApp";

import "./styles.css";

//ReactDOM.createRoot(document.getElementById("root")).render(
//<React.StrictMode>
//<LoveApp />
//</React.StrictMode>
//);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirstApp title="Hola, soy Rocío" />
  </React.StrictMode>
);
