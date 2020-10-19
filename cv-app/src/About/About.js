import React from "react";
import "../Style/App.css";
import Header from "./About-component.js";
import AboutTextComponent from "./About-text-component.js";
import AboutTextData from "../Data/About-data";

function App() {
  return (
    <div className="main">
      <h1>Hi, my name is Minh!</h1>
      <Header />
      <div className="degreeHeader">
        <code>Frontend-developer student</code>
        <code>Technical engineer</code>
        <code>Electrician</code>
      </div>

      <div className="wrapper">
        {AboutTextData.map((d) => (
          <AboutTextComponent AboutTextData={d} key={d.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
