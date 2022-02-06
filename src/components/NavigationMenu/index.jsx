import React from "react";
import "./styles.scss";

import CustomNavLink from "../ui/CustomNavLink";
const NavigationMenu = () => {
  return (
    <div className="navigation-container">
      <nav className="navigation-container__links">
        <CustomNavLink href="/">About Me</CustomNavLink>
        <CustomNavLink href="/hard-skills">Hard Skills</CustomNavLink>
        <CustomNavLink href="/soft-skills">Soft Skills</CustomNavLink>
        <CustomNavLink href="/experience">Experience</CustomNavLink>
      </nav>
    </div>
  );
};

export default NavigationMenu;
