import React, { Component } from "react";
import BoulderingComponent from "./Bouldering-component";
import FriendsComponent from "./Friends-component";
import CaliComponent from "./Cali-Component";
import CaliVideoComponent from "./Cali-video-component";
import VideoData from "./Boulder-data";
import FriendsData from "./Friends-data";
import CaliData from "./Calisthenics-data";
import CaliVideoData from "./Calisthenics-video-data";
import "./BoulderingVideo.css";

class Hobby extends Component {
  render() {
    return (
      <div className="hobbyContent">
        <div className="hobbyName">
          <h1>Bouldering</h1>
          <div className="hobbyCard">
            <div className="hobbyText">
              <p>lorem ipsum blablabla</p>
              <p>lorem ipsum blablabla</p>
              <p>lorem ipsum blablabla</p>
              <p>lorem ipsum blablabla</p>
              <p>lorem ipsum blablabla</p>
            </div>
            <div className="mediaContent">
              {VideoData.map((d) => (
                <BoulderingComponent VideoData={d} key={d.id} />
              ))}
            </div>
          </div>
        </div>
        <div className="header">
          <h1>Bouldering</h1>
        </div>
        <div className="Content"></div>
        <div className="hobbyContent">
          <div>
            <h1>Training</h1>
          </div>
          <div className="Content">
            {CaliVideoData.map((d) => (
              <CaliVideoComponent CaliVideoData={d} key={d.id} />
            ))}
            {CaliData.map((d) => (
              <CaliComponent CaliData={d} key={d.id} />
            ))}
          </div>
        </div>
        <div className="hobbyContent">
          <div>
            <h1>With friends</h1>
          </div>
          <div className="Content">
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
