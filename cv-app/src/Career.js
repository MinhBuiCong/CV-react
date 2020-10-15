import React, { Component } from "react";
import "./Career.css";
import Data from "./Data";
import CardComponent from "./Card-component";

class Career extends Component {
  render() {
    return (
      <div className="careerContent">
        <div className="header">
          <h1>Career</h1>
        </div>
        <div className="cardComponent">
          {Data.map((d) => (
            <CardComponent data={d} key={d.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Career;
