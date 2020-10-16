import React from "react";
import "../Style/Hobby.css";

function BoulderingVideo({ VideoData }) {
  const { videosrc } = VideoData;
  return (
    <div className="mediaWrapper">
      <div className="videoPlayer">
        <video width="400" controls>
          <source src={videosrc} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}

export default BoulderingVideo;
