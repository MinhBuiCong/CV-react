import React from "react";
import "../Style/Card-component.css";
import "../Media-tablet-styles/card-component-tablet.css";
import "../Media-mobile-styles/card-component-mobile.css";

function EducationCardComponent({ EduData }) {
  const { name, duration, info, imgsrc, degree } = EduData;
  return (
    <div className="cardComponentWrapper">
      <img className="logoSchool" src={imgsrc} alt="logo" />
      <h1>{name}</h1>
      <h2>{duration}</h2>
      <h3>{degree}</h3>
      <p>{info}</p>
    </div>
  );
}

export default EducationCardComponent;
