import React from "react";
import "../Style/App.css";
import "../Media-styles/app-tablet.css";
import Header from "./About-component.js";
import AboutTextComponent from "./About-text-component.js";
import AboutTextData from "../Data/About-data";

function App() {
  return (
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
  );
}

export default App;
