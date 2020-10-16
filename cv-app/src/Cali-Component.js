import React from "react";
import "./BoulderingVideo.css";

function CaliComponent({ CaliData }) {
  const { imgsrc } = CaliData;
  return (
    <div className="mediaWrapper">
      <img src={imgsrc} />
    </div>
  );
}

export default CaliComponent;
