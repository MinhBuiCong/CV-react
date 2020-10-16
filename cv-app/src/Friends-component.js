import React from "react";
import "./BoulderingVideo.css";

function FriendsComponent({ FriendsData }) {
  const { imgsrc } = FriendsData;
  return (
    <div className="mediaWrapper">
      <img src={imgsrc} />
    </div>
  );
}

export default FriendsComponent;
