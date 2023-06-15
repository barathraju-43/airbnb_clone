import React from "react";
import star from "../src/assets/Star.png";

export default function Card(props) {
  let cardimage = `../src/assets/${props.img}`;
  return (
    <div className="card">
      <img src={cardimage} className="card--image" />
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">{props.reviewCount} • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From {props.price}</span> / person
      </p>
    </div>
  );
}
