import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./FirstApp";
import { LoveApp } from "./LoveApp";

//ReactDOM.createRoot(document.getElementById("root")).render(
//<React.StrictMode>
//<LoveApp />
//</React.StrictMode>
//);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirstApp />
  </React.StrictMode>
);
