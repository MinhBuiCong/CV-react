import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./logo.js";
import Home from "./Home-page";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my site</h1>
        <Header></Header>
        <BrowserRouter>
          <Switch>
            <button>
              <Route exact path="./Home-page.js" component={Home} />
            </button>
          </Switch>
        </BrowserRouter>
        <p>Arrow right</p>
      </header>
    </div>
  );
}

export default App;
