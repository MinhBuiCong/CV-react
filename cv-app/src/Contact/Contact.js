import React, { Component } from "react";
import ContactData from "../Data/Contact-data";
import ContactCardComponent from "./Contact-card-component";
import "../Style/Contact.css";
import "../Media-tablet-styles/contact-tablet.css";
import "../Media-mobile-styles/contact-mobile.css";
import Gmail from "../Icons/gmail.svg";
import Mobile from "../Icons/mobile.svg";

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
        <div className="mailContent">
          <a href="mailto:minbui54@gmail.com">
            <img src={Gmail} alt="gmail logo"></img>
          </a>
          <h1>Send mail</h1>
        </div>
        <div className="callContent">
          <a href="tel:+4797627386">
            <img src={Mobile} alt="mobile logo"></img>
          </a>
          <h1>Call</h1>
        </div>
      </div>
    );
  }
}

export default Contact;
