// src/components/Home.js
import React from "react";
import { username, city } from "../data/user";

export default function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
      <p>{username} lives in {city}.</p>
    </div>
  );
}
