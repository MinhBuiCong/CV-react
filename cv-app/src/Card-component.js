import React from "react";
import "./Card-component.css";

function CardComponent({ data }) {
  const { name, length, info, imgsrc } = data;
  return (
    <div className="wrapper">
      <img src={imgsrc} />
      <h1>{name}</h1>
      <p>{length}</p>
      <p>{info}</p>
    </div>
  );
}

export default CardComponent;
