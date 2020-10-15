import React from "react";
import "./App.css";
import profile from "./profile.jpg";

function Header() {
  return (
    <div className="imgContainer">
      <img className="profilePic" src={profile} alt="profile" />;
    </div>
  );
}

export default Header;
