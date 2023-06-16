import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import carddata from "./data";
import "./App.css";

export default function App() {
  console.log(carddata);
  const Carddata = carddata.map((data) => {
    return <Card key={data.id} {...data} />;
  });
  return (
    <div>
      <NavBar />
      <Hero />
      <section className="cards-list">{Carddata}</section>
    </div>
  );
}
