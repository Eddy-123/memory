import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";

import Header from "./components/Header";
import Game from "./components/Game";
import Footer from "./components/Footer";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Game />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
