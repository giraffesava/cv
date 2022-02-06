import React from "react";
import Image from "../Image";
import NavigationMenu from "../NavigationMenu";
import "./styles.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <Image />
      <h1>Frontend Developer</h1>
      <NavigationMenu />
    </div>
  );
};

export default Navigation;
