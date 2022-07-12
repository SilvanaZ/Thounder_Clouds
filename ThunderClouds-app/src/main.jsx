import React from "react";
import ReactDOM from "react-dom/client";
//import { CounterApp } from "./CounterApp";
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
    {/*</CounterApp value={0}/>*/}
    <FirstApp title="Hola" />
  </React.StrictMode>
);
