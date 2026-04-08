import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language?.startsWith("fr") ? "fr" : "en";

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("simenova-language", language);
  };

  return (
    <div
      className="language-switcher"
      role="group"
      aria-label={t("languageSwitcher.label")}
    >
      <button
        type="button"
        className={
          currentLanguage === "en"
            ? "language-switcher__button active"
            : "language-switcher__button"
        }
        onClick={() => changeLanguage("en")}
        aria-pressed={currentLanguage === "en"}
      >
        EN
      </button>
      <button
        type="button"
        className={
          currentLanguage === "fr"
            ? "language-switcher__button active"
            : "language-switcher__button"
        }
        onClick={() => changeLanguage("fr")}
        aria-pressed={currentLanguage === "fr"}
      >
        FR
      </button>
    </div>
  );
}
