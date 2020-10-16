import React, { Component } from "react";
import BoulderingComponent from "./Bouldering-video";
import VideoData from "./Hobby-data";
import "./BoulderingVideo.css";

class Hobby extends Component {
  render() {
    return (
      <div className="hobbyContent">
        <div className="header">
          <h1>Hobby</h1>
        </div>
        <div className="videoContent">
          {VideoData.map((d) => (
            <BoulderingComponent VideoData={d} key={d.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Hobby;
