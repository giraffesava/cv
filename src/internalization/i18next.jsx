import translationsEn from "./locales/en/en.json";
import translationsRu from "./locales/ru/ru.json";

const currentLanguage = localStorage.getItem("language");

export const intl = {
  resources: {
    en: {
      translation: translationsEn,
    },
    ru: {
      translation: translationsRu,
    },
  },
  lng: currentLanguage, // if you're using a language detector, do not define the lng option
  fallbackLng: "en",

  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
};
