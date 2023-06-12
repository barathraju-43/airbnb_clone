import React from "react";
import airbnblogo from "../src/assets/airbnblogo.png";

export default function NavBar() {
  return (
    <nav>
      <img className="nav-logo" src={airbnblogo} alt="logo" />
    </nav>
  );
}
