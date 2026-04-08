import { useTranslation } from "react-i18next";
import Button from "../../common/button/Button";
import "./ctaSection.css";

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="cta-section section">
      <div className="container cta-section__inner">
        <h2>{t("home.cta.title")}</h2>
        <p>{t("home.cta.description")}</p>
        <Button to="/contact" variant="primary">
          {t("home.cta.button")}
        </Button>
      </div>
    </section>
  );
}
