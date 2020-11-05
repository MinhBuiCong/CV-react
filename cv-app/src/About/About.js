import React, { useState } from "react";
import "../Style/App.css";
import "../Media-tablet-styles/app-tablet.css";
import "../Media-mobile-styles/app-mobile.css";
import Header from "./About-component.js";
import AboutTextComponent from "./About-text-component.js";
import AboutTextData from "../Data/About-data";

const types = ["about", "career", "education", "hobby", "contact"];

function NavBar() {
  const [active, setActive] = useState(types[0]);
  return (
    <div className="navigation">
      {types.map((type) => (
        <button active={active === type} onclick={() => setActive(type)}>
          {type}
        </button>
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <div className="main">
        <h1>Hi, my name is Minh!</h1>
        <Header />
        <ul className="degreeHeader">
          <li>Frontend-developer student</li>
          <li>Technical engineer</li>
          <li>Electrician</li>
        </ul>

        <div className="wrapper">
          {AboutTextData.map((d) => (
            <AboutTextComponent AboutTextData={d} key={d.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
