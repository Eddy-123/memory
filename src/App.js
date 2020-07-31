import React, { Component } from "react";

import "./styles.css";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header gameState="in progress" />
        <Body />
        <Footer />
      </div>
    );
  }
}
