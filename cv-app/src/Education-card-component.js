import React from "react";
import "./Education-card-component.css";

function EducationCardComponent({ EduData }) {
  const { name, duration, info, imgsrc, degree } = EduData;
  return (
    <div className="cardComponentWrapper">
      <img src={imgsrc} />
      <h1>{name}</h1>
      <p>{duration}</p>
      <p>{degree}</p>
      <p>{info}</p>
    </div>
  );
}

export default EducationCardComponent;
