import React from "react";
import ToggleButton from "../ui/ToggleButton";
import "./header.scss";
export const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">Sava's website</div>
      <div className="header-buttons">
        <ToggleButton />
        <div>EN</div>
      </div>
    </div>
  );
};
