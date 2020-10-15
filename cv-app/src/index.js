import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Start-page";
import About from "./About";
import Career from "./Career";
import Education from "./Education";
import Hobby from "./Hobby";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const routing = (
  <BrowserRouter>
    <div className="content">
      <div className="pages">
        <button>
          <Link to="/Start-page">Home</Link>
        </button>
        <button>
          <Link to="/About">About</Link>
        </button>
        <button>
          <Link to="/Career">Career</Link>
        </button>
        <button>
          <Link to="/Education">Education</Link>
        </button>
        <button>
          <Link to="/Hobby">Hobby</Link>
        </button>
      </div>
      <Switch>
        <Route exact path="/Start-page" component={App} />
        <Route path="/About" component={About} />
        <Route path="/Career" component={Career} />
        <Route path="/Education" component={Education} />
        <Route path="/Hobby" component={Hobby} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById("root"));
