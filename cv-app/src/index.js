import React from "react";
import ReactDOM from "react-dom";
import "./Style/index.css";
import App from "./About/About";
import Career from "./Career/Career";
import Education from "./Education/Education";
import Hobby from "./Hobby/Hobby";
import Contact from "./Contact/Contact";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const routing = (
  <BrowserRouter>
    <div className="content">
      <div className="pages">
        <button>
          <Link
            style={{ textDecoration: "none", color: "#ffffff" }}
            to="/About"
          >
            About
          </Link>
        </button>
        <button>
          <Link
            style={{ textDecoration: "none", color: "#ffffff" }}
            to="/Career"
          >
            Career
          </Link>
        </button>
        <button>
          <Link
            style={{ textDecoration: "none", color: "#ffffff" }}
            to="/Education"
          >
            Education
          </Link>
        </button>
        <button>
          <Link
            style={{ textDecoration: "none", color: "#ffffff" }}
            to="/Hobby"
          >
            Hobby
          </Link>
        </button>
        <button>
          <Link
            style={{ textDecoration: "none", color: "#ffffff" }}
            to="/Contact"
          >
            Contact
          </Link>
        </button>
      </div>
      <Switch>
        <Route exact path="/About" component={App} />
        <Route path="/Career" component={Career} />
        <Route path="/Education" component={Education} />
        <Route path="/Hobby" component={Hobby} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById("root"));
