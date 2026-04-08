import { useTranslation } from "react-i18next";
import Container from "../../common/container/Container";
import SectionHeading from "../../common/sectionHeading/SectionHeading";
import Button from "../../common/button/Button";
import "./aboutPreview.css";

export default function AboutPreview() {
  const { t } = useTranslation();

  return (
    <section className="section">
      <Container>
        <div className="about-preview">
          <div>
            <SectionHeading
              eyebrow={t("home.about.eyebrow")}
              title={t("home.about.title")}
              description={t("home.about.description")}
            />

            <ul className="about-preview__highlights">
              <li>{t("home.about.highlights.one")}</li>
              <li>{t("home.about.highlights.two")}</li>
              <li>{t("home.about.highlights.three")}</li>
            </ul>

            <Button to="/about" variant="secondary">
              {t("home.about.cta")}
            </Button>
          </div>

          <div className="about-preview__panel">
            <div className="about-preview__panel-card">
              <span>{t("home.about.panel.label")}</span>
              <strong>{t("home.about.panel.value")}</strong>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
