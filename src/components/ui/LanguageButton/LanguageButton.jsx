import React from "react";
import { useLanguage } from "../../../hooks/use-change-language";

import "./styles.scss";

const LanguageButton = () => {
  const { language, setLanguage } = useLanguage("EN");
  const onClick = (e) => {
    e.target.innerText === "EN" ? setLanguage("ru") : setLanguage("en");
  };

  //const currentLanguage = localStorage.getItem("language");

  return (
    <div className="language" onClick={onClick}>
      {language.toUpperCase()}
    </div>
  );
};

export default LanguageButton;
