import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import carddata from "./data";
import "./App.css";

export default function App() {
  console.log(carddata);
  const Cdata = carddata.map((data) => {
    return (
      <Card
        img={data.coverImg}
        rating={data.stats.rating}
        reviewCount={data.stats.reviewCount}
        location={data.location}
        title={data.title}
        price={data.price}
      />
    );
  });
  return (
    <div>
      <NavBar />
      <Hero />
      <section className="cards-list">{Cdata}</section>
    </div>
  );
}
