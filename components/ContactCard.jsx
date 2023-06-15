import React from "react";
import "./Contact.css";
import phicon from "../src/assets/phone-icon.png";
import mailicon from "../src/assets/mail-icon.png";

export default function ContactCard({ img: image, name, phone, email }) {
  return (
    <div className="contact-card">
      <img src={image} />
      <h3>{name}</h3>
      <div className="info-group">
        <img src={phicon} />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img src={mailicon} />
        <p>{email}</p>
      </div>
    </div>
  );
}
