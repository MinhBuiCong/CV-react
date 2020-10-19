import React from "react";
import "../Style/App.css";

function AboutTextComponent({ AboutTextData }) {
  const { info } = AboutTextData;
  return (
    <div className="textContainer">
      <p>{info}</p>{" "}
    </div>
  );
}

export default AboutTextComponent;
