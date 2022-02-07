import React from "react";
import Content from "../Content/Content";
import Navigation from "../SideBar/SideBar";
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
