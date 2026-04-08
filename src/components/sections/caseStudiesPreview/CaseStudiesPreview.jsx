import { useTranslation } from "react-i18next";
import Container from "../../common/container/Container";
import SectionHeading from "../../common/sectionHeading/SectionHeading";
import Button from "../../common/button/Button";
import CaseStudyCard from "../../common/caseStudyCard/CaseStudyCard";
import { caseStudies } from "../../../data/caseStudies";
import "./caseStudiesPreview.css";

export default function CaseStudiesPreview() {
  const { t } = useTranslation();

  return (
    <section className="section bg-light">
      <Container>
        <SectionHeading
          eyebrow={t("home.caseStudies.eyebrow")}
          title={t("home.caseStudies.title")}
          description={t("home.caseStudies.description")}
        />

        <div className="case-studies-preview__grid">
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.id}
              titleKey={study.titleKey}
              challengeKey={study.challengeKey}
              solutionKey={study.solutionKey}
              outcomeKey={study.outcomeKey}
            />
          ))}
        </div>

        <div className="case-studies-preview__action">
          <Button to="/case-studies" variant="secondary">
            {t("home.caseStudies.cta")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
