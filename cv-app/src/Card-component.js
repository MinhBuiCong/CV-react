import React from "react";
import "./Card-component.css";

function CardComponent({ data }) {
  const { name, duration, info, imgsrc } = data;
  return (
    <div className="cardComponentWrapper">
      <img src={imgsrc} alt="logo" />
      <h1>{name}</h1>
      <h2>{duration}</h2>
      <p>{info}</p>
    </div>
  );
}

export default CardComponent;
