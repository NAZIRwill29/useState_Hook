import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

var count = 0;

function increase() {
  count++;
  console.log(count);
}

ReactDOM.render(<App />, document.getElementById("root"));
