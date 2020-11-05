import React, { Component } from "react";
import "../Style/Education.css";
import "../Media-styles/education-tablet.css";
import EduData from "../Data/Education-data";
import EducationCardComponent from "./Education-card-component";

class Education extends Component {
  render() {
    return (
      <div className="educationContent">
        <div className="header">
          <h1>Education</h1>
        </div>
        <div className="cardComponent">
          {EduData.map((d) => (
            <EducationCardComponent EduData={d} key={d.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Education;
