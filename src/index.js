import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import "./styles/main.scss";

function Index() {
  return <App />;
}

ReactDOM.render(<Index />, document.getElementById("root"));
