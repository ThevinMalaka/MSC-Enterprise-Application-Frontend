import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Assuming English and Heb Translations
import translationEN from "./locales/en/translation.json";
import translationHEB from "./locales/heb/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  heb: {
    translation: translationHEB,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
