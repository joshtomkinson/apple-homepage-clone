import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Watch from "./components/Watch";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Body />
        <Watch />
      </div>
    );
  }
}

export default App;
