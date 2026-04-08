import { useTranslation } from "react-i18next";
import Container from "../../common/container/Container";
import SectionHeading from "../../common/sectionHeading/SectionHeading";
import { whyChooseUsItems } from "../../../data/whyChooseUs";
import "./whyChooseUs.css";

export default function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow={t("home.why.eyebrow")}
          title={t("home.why.title")}
          description={t("home.why.description")}
        />

        <div className="why-choose-us__grid">
          {whyChooseUsItems.map((item) => (
            <article key={item.id} className="why-choose-us__card">
              <h3>{t(item.titleKey)}</h3>
              <p>{t(item.descriptionKey)}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
