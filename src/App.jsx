import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import "./App.css";

export default function App() {
  return (
    <div>
      <NavBar />;
      <Hero />
      <Card />
    </div>
  );
}
