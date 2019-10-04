import React from "react";
import ReactDOM from "react-dom";

import Calculator from "./components/Calculator.jsx";

const App = () => {
  return (<div>
    <Calculator />
  </div>);
};

ReactDOM.render(<App />, document.querySelector("#root"));
