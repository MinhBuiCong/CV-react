import React from "react";
import "./Card-component.css";

function EducationCardComponent({ EduData }) {
  const { name, duration, info, imgsrc, degree } = EduData;
  return (
    <div className="cardComponentWrapper">
      <img src={imgsrc} alt="logo" />
      <h1>{name}</h1>
      <h2>{duration}</h2>
      <h3>{degree}</h3>
      <p>{info}</p>
    </div>
  );
}

export default EducationCardComponent;
