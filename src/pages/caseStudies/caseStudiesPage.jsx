import { useTranslation } from "react-i18next";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import PageHero from "../../components/layout/pageHero/PageHero";
import PageIntro from "../../components/common/pageIntro/PageIntro";
import Container from "../../components/common/container/Container";
import CaseStudyCard from "../../components/common/caseStudyCard/CaseStudyCard";
import { caseStudies } from "../../data/caseStudies";
import "../../components/sections/caseStudiesPreview/caseStudiesPreview.css";
import CTASection from "../../components/sections/ctaSection/CtaSection";

export default function CaseStudiesPage() {
  const { t } = useTranslation();

  useDocumentTitle(`${t("meta.caseStudies")} | SIMENOVA`);

  return (
    <>
      <PageHero
        eyebrow={t("caseStudiesPage.hero.eyebrow")}
        title={t("caseStudiesPage.hero.title")}
        description={t("caseStudiesPage.hero.description")}
      />

      <PageIntro
        title={t("caseStudiesPage.intro.title")}
        description={t("caseStudiesPage.intro.description")}
      />

      <section className="section bg-light">
        <Container>
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
        </Container>
      </section>

      <CTASection />
    </>
  );
}
