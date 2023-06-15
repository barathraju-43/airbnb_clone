import React from "react";
import "./Contact.css";

export default function Joke({ setup, punch }) {
  return (
    <div>
      <h3>Setup: {setup}</h3>
      <h3>Punchline: {punch}</h3>
      <hr />
      <p>The End!</p>
    </div>
  );
}
