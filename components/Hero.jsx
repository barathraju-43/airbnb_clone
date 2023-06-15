import React from "react";
import heroimg from "../src/assets/heroImage.png";

export default function NavBar() {
  return (
    <section className="hero">
      <img src={heroimg} className="hero--photo" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
