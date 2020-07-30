import React from "react";

import "./styles.css";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const HIDDEN_SYMBOL = "?";

export default function App() {
  return (
    <div className="App">
      <Header gameState="in progress" />
      <Body />
      <Footer />
    </div>
  );
}
