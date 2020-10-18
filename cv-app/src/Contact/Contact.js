import React, { Component } from "react";
import ContactData from "../Data/Contact-data";
import ContactCardComponent from "./Contact-card-component";
import "../Style/Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contactContent">
        <div className="header">
          <h1>Contact</h1>
        </div>
        <div className="cardComponent">
          {ContactData.map((d) => (
            <ContactCardComponent ContactData={d} key={d.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Contact;
