import React from "react";
import airbnblogo from "../src/assets/airbnblogo.png";

export default function NavBar() {
  return (
    <nav>
      <img src={airbnblogo} className="nav--logo" />
    </nav>
  );
}
