import React from "react";
import star from "../src/assets/Star.png";

export default function Card(props) {
  let cardimage = `../src/assets/${props.coverImg}`;
  let badgetext;
  if (props.openSpots === 0) {
    badgetext = "SOLD OUT";
  } else if (props.location === "Online") {
    badgetext = "ONLINE";
  }
  return (
    <div className="card">
      {badgetext && <div className="card--badge">{badgetext}</div>}
      <img src={cardimage} className="card--image" />
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From {props.price}</span> / person
      </p>
    </div>
  );
}
