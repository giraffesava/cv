import React from "react";
import Image from "../Image/Image";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Icons from "../ui/Icons/Icons";
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
