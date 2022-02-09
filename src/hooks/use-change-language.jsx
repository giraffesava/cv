import { useState, useLayoutEffect } from "react";
import i18n from "i18next";

export const useLanguage = () => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  useLayoutEffect(() => {
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  }, [language]);
  return { language, setLanguage };
};
