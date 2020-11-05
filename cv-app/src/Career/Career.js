import React, { Component } from "react";
import "../Style/Career.css";
import "../Media-tablet-styles/career-tablet.css";
import Data from "../Data/Career-data";
import CardComponent from "./Career-card-component";

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
