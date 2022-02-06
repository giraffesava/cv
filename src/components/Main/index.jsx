import React from "react";
import Content from "../Content";
import Navigation from "../Navigation";
import "./styles.scss";

const Main = () => {
  return (
    <div className="main">
      <Navigation />
      <Content />
    </div>
  );
};

export default Main;
