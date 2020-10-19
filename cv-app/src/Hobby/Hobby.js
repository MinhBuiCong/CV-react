import React, { Component } from "react";
import BoulderingComponent from "./Bouldering-component";
import FriendsComponent from "./Friends-component";
import CaliComponent from "./Cali-Component";
import CaliVideoComponent from "./Cali-video-component";
import VideoData from "../Data/Boulder-data";
import FriendsData from "../Data/Friends-data";
import CaliData from "../Data/Calisthenics-data";
import CaliVideoData from "../Data/Calisthenics-video-data";
import HobbyTextComponent from "./Text-component";
import HobbyTextData from "../Data/Hobby-text-data";
import "../Style/Hobby.css";

class Hobby extends Component {
  render() {
    return (
      <div className="hobbyContent">
        <div className="hobbyName">
          <h1>Friends</h1>
          <div className="hobbyCard">
            <div className="hobbyText">
              <HobbyTextComponent
                HobbyTextData={HobbyTextData[0]}
                key={HobbyTextData[0].id}
              />
            </div>
            <div className="mediaContent">
              {FriendsData.map((d) => (
                <FriendsComponent FriendsData={d} key={d.id} />
              ))}
            </div>
          </div>
        </div>
        <div className="hobbyName">
          <h1>Bouldering</h1>
          <div className="hobbyCard">
            <div className="hobbyText">
              <HobbyTextComponent
                HobbyTextData={HobbyTextData[1]}
                key={HobbyTextData.id}
              />
            </div>
            <div className="mediaContent">
              {VideoData.map((d) => (
                <BoulderingComponent VideoData={d} key={d.id} />
              ))}
            </div>
          </div>
        </div>
        <div className="hobbyName">
          <h1>Training</h1>
          <div className="hobbyCard">
            <div className="hobbyText">
              <HobbyTextComponent
                HobbyTextData={HobbyTextData[2]}
                key={HobbyTextData.id}
              />
            </div>
            <div className="mediaContent">
              {CaliVideoData.map((d) => (
                <CaliVideoComponent CaliVideoData={d} key={d.id} />
              ))}
              {CaliData.map((d) => (
                <CaliComponent CaliData={d} key={d.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hobby;
