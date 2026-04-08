import { useTranslation } from "react-i18next";
import Container from "../../common/container/Container";
import SectionHeading from "../../common/sectionHeading/SectionHeading";
import Button from "../../common/button/Button";
import { services } from "../../../data/services";
import "./servicesPreview.css";

export default function ServicesPreview() {
  const { t } = useTranslation();

  return (
    <section className="section bg-light">
      <Container>
        <SectionHeading
          eyebrow={t("home.services.eyebrow")}
          title={t("home.services.title")}
          description={t("home.services.description")}
        />

        <div className="services-preview__grid">
          {services.map((service) => (
            <article key={service.id} className="services-preview__card">
              <h3>{t(service.titleKey)}</h3>
              <p>{t(service.descriptionKey)}</p>
            </article>
          ))}
        </div>

        <div className="services-preview__action">
          <Button to="/services" variant="secondary">
            {t("home.services.cta")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
