import React from "react";
import heroimg from "../src/assets/heroImage.png";

export default function NavBar() {
  return (
    <section className="hero-container">
      <img className="hero-img" src={heroimg} alt="image" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
