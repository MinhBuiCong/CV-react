import React from "react";
import "./Card-component.css";

function CardComponent({ data }) {
  const { name, duration, info, imgsrc } = data;
  return (
    <div className="cardComponentWrapper">
      <img src={imgsrc} />
      <h1>{name}</h1>
      <p>{duration}</p>
      <p>{info}</p>
    </div>
  );
}

export default CardComponent;
