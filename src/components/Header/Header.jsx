import React from "react";
import ToggleButton from "../ui/ToggleButton/ToggleButton";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__elements">
        <div className="header__logo">
          <h1>Sava's website</h1>
        </div>
        <div className="header__elements__buttons">
          <ToggleButton />
          <div className="header__elements__buttons__language">EN</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
