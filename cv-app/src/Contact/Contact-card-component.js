import React from "react";
import "../Style/Card-component.css";
import "../Style/Contact.css";

function ContactCardComponent({ ContactData }) {
  const { name, logo, link } = ContactData;
  return (
    <div className="contactCardComponentWrapper">
      <a href={link} className="link">
        <img src={logo} alt="logo" className="icon"></img>
      </a>
      <h1>{name}</h1>
    </div>
  );
}

export default ContactCardComponent;
