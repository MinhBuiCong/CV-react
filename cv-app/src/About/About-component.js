import React from "react";
import "../Style/App.css";
import profile from "../images/profile.jpg";

function Header() {
  return (
    <div className="imgContainer">
      <img className="profilePic" src={profile} alt="profile" />;
    </div>
  );
}

export default Header;
