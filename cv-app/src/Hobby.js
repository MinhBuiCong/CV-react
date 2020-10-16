import React, { Component } from "react";
import BoulderingComponent from "./Bouldering-video";
import FriendsComponent from "./Friends-component";
import VideoData from "./Boulder-data";
import FriendsData from "./Friends-data";
import "./BoulderingVideo.css";

class Hobby extends Component {
  render() {
    return (
      <div className="hobbyContent">
        <div className="header">
          <h1>Bouldering</h1>
        </div>
        <div className="videoContent">
          {VideoData.map((d) => (
            <BoulderingComponent VideoData={d} key={d.id} />
          ))}
        </div>
        <div>
          <h1>Calisthenics</h1>
        </div>
        <div className="friendsContent">
          <div>
            <h1>With friends</h1>
          </div>
          <div className="pictureContent">
            {FriendsData.map((d) => (
              <FriendsComponent FriendsData={d} key={d.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Hobby;
