import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Header from "./logo.js";
import Home from "./Home page/Home-page.js";

function App({ logos, hardware }) {
  return (
    <div className="App">
      <h1>Welcome to my site</h1>
      <Header />
      <button>About</button>
      <button>Career</button>
      <button>Education</button>
      <button>Hobby</button>
      <ul>
        {logos.map((logos) => (
          <li>{logos}</li>
        ))}
      </ul>
      <div>
        {hardware.map((hardware) => (
          <>
            <li>{hardware.id}</li>
            <h1>{hardware.brand}</h1>
            <h2>{hardware.name}</h2>
            <p>{hardware.storage}</p>
            <p>{hardware.read}</p>
            <p>{hardware.write}</p>
            <p>{hardware.dimensions}</p>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
