import React from "react";
import "./App.css";
import profile from "./profile.jpg";

function Header() {
  return <img className="profilePic" src={profile} alt="profile" />;
}

export default Header;
