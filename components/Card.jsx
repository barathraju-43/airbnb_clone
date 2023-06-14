import React from "react";
import katie from "../src/assets/katie.png";
import star from "../src/assets/Star.png";

export default function Card() {
  return (
    <div className="card-container">
      <img className="img-1" src={katie} alt="katie" />
      <div className="star-rating">
        <img className="star" src={star} alt="star" />
        <span>5.0</span>
        <span className="gray">(6) •</span>
        <span className="gray">USA</span>
        <p>Life Lessons with Katie Zaferes</p>
        <p>
          <span className="bold">From $136</span> / person
        </p>
      </div>
    </div>
  );
}
