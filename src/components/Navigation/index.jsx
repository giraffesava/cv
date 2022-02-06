import React from "react";
import Image from "../Image";
import NavigationMenu from "../NavigationMenu";
import Icons from "../ui/Icons";
import "./styles.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <Image />
      <Icons />

      <h1>Frontend Developer</h1>
      <NavigationMenu />
    </div>
  );
};

export default Navigation;
