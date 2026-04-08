import { useTranslation } from "react-i18next";
import Button from "../../common/button/Button";
import "./Hero.css";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero section">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">{t("home.hero.eyebrow")}</p>
          <h1>{t("home.hero.title")}</h1>
          <p className="hero__description">{t("home.hero.description")}</p>

          <div className="hero__actions">
            <Button to="/contact" variant="primary">
              {t("home.hero.primaryCta")}
            </Button>
            <Button to="/services" variant="secondary">
              {t("home.hero.secondaryCta")}
            </Button>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <img
            src="/images/hero/heroImage.png"
            alt="Healthcare and biotechnology analytics visualization"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
}
