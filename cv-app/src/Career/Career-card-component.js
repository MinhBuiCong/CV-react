import React from "react";
import "../Style/Card-component.css";
import "../Media-tablet-styles/card-component-tablet.css";
import "../Media-mobile-styles/card-component-mobile.css";

function CardComponent({ data }) {
  const { name, duration, info, imgsrc, position } = data;
  return (
    <div className="cardComponentWrapper">
      <img src={imgsrc} alt="logo" />
      <h1>{name}</h1>
      <h2>{duration}</h2>
      <h3>{position}</h3>
      <p>{info}</p>
    </div>
  );
}

export default CardComponent;
