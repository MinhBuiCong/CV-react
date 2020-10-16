import React from "react";
import "./BoulderingVideo.css";

function BoulderingVideo({ VideoData }) {
  const { videosrc, name } = VideoData;
  return (
    <div className="videoContainer">
      <div className="videoPlayer">
        <video width="400" controls>
          <source src={videosrc} type="video/mp4"></source>
        </video>
      </div>
      <div className="textContent">
        <p>{name}</p>
      </div>
    </div>
  );
}

export default BoulderingVideo;
