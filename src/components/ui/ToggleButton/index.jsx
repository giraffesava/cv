import React from "react";
import "./index.scss";
import { useTheme } from "../../../hooks/use-theme";

const ToggleButton = () => {
  const { setTheme } = useTheme();

  const change = (e) => {
    if (e.target.checked) {
      setTheme("dark");
      return;
    }
    setTheme("light");
  };

  return (
    <>
      <label className="switch">
        <input type="checkbox" onChange={change} />
        <span className="slider round"></span>
      </label>
    </>
  );
};

export default ToggleButton;
