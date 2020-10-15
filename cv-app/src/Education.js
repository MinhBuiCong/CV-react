import React, { Component } from "react";
import EduData from "./Education-data";
import EducationCardComponent from "./Education-card-component";

class Education extends Component {
  render() {
    return (
      <div>
        <h1>Education</h1>
        <p>This is {Education} page.</p>
        <div>
          {EduData.map((d) => (
            <EducationCardComponent EduData={d} key={d.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Education;
