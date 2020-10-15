import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./index.css";
import App from "./Start-page";
import Home from "./Home page/Home-page";

function Hello({ quote, message, number }) {
  return (
    <div>
      <h1>{quote}</h1>
      <p>{message}</p>
      <p>{number}</p>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Hello
      quote="Welcome to my site"
      message="This is dynamic string that will change"
      number={104854798}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
