import React from "react";
import "./index.scss";
import { useTheme } from "../../../hooks/use-theme";

const ToggleButton = () => {
  const { theme, setTheme } = useTheme();

  const change = (e) => {
    if (e.target.checked) {
      setTheme("light");
      return;
    }
    setTheme("dark");
  };

  return (
    <div>
      <label className="switch">
        <input type="checkbox" checked={theme === "light"} onChange={change} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleButton;
