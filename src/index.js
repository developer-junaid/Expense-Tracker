import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Main Component
function Main() {
  return (
    <div>
      <App />
    </div>
  );
}

// Properties
ReactDOM.render(<Main />, document.querySelector("#root"));
