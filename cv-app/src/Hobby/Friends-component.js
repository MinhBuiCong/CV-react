import React from "react";
import "../Style/Hobby.css";

function FriendsComponent({ FriendsData }) {
  const { imgsrc } = FriendsData;
  return (
    <div className="mediaWrapper">
      <img src={imgsrc} alt="pictures" />
    </div>
  );
}

export default FriendsComponent;
