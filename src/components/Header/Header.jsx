import React from "react";
import ToggleButton from "../ui/ToggleButton/ToggleButton";
import LanguageButton from "./../ui/LanguageButton/LanguageButton";

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
          <LanguageButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
