import React from "react";
import "./BoulderingVideo.css";

function FriendsComponent({ FriendsData }) {
  const { imgsrc } = FriendsData;
  return (
    <div className="friendsComponentWrapper">
      <img src={imgsrc} />
    </div>
  );
}

export default FriendsComponent;
