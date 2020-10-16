import React from "react";
import "./BoulderingVideo.css";

function CaliVideoComponent({ CaliVideoData }) {
  const { videosrc } = CaliVideoData;
  return (
    <div className="mediaWrapper">
      <video width="400" controls>
        <source src={videosrc} type="video/mp4"></source>
      </video>
    </div>
  );
}

export default CaliVideoComponent;
