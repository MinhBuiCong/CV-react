import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Header from "./logo.js";
import Home from "./Home page/Home-page";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to my site</h1>
      <Header />
      <button>About</button>
      <button>Career</button>
      <button>Education</button>
      <button>Hobby</button>
    </div>
  );
}
