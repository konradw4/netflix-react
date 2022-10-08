import React from "react";
import Banner from "../Banner/Banner";

import Nav from "../Nav/Nav";

import "./HomeScreen.scss";

function HomeScreen() {
  return (
    <div className="home-screen">
      <Nav></Nav>
      <Banner></Banner>
    </div>
  );
}

export default HomeScreen;
