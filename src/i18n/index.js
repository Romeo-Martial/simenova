import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import fr from "./locales/fr/translation.json";

function getSavedLanguage() {
  if (typeof window === "undefined") return "en";

  const savedLanguage = window.localStorage.getItem("simenova-language");
  return savedLanguage || "en";
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: getSavedLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
