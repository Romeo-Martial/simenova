import { useTranslation } from "react-i18next";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import PageHero from "../../components/layout/pageHero/PageHero";
import PageIntro from "../../components/common/pageIntro/PageIntro";
import ContentSection from "../../components/common/contentSection/ContentSection";
import InfoCardGrid from "../../components/common/infoCardGrid/InfoCardGrid";
import CTASection from "../../components/sections/ctaSection/CtaSection";
import { aboutValues, aboutApproach } from "../../data/aboutPage";

export default function AboutPage() {
  const { t } = useTranslation();

  useDocumentTitle(`${t("meta.about")} | SIMENOVA`);

  const values = aboutValues.map((item) => ({
    id: item.id,
    title: t(item.titleKey),
    description: t(item.descriptionKey),
  }));

  const approach = aboutApproach.map((item) => ({
    id: item.id,
    title: t(item.titleKey),
    description: t(item.descriptionKey),
  }));

  return (
    <>
      <PageHero
        eyebrow={t("about.hero.eyebrow")}
        title={t("about.hero.title")}
        description={t("about.hero.description")}
      />

      <PageIntro
        title={t("about.intro.title")}
        description={t("about.intro.description")}
      />

      <ContentSection
        eyebrow={t("about.mission.eyebrow")}
        title={t("about.mission.title")}
        description={t("about.mission.description")}
        background="light"
      >
        <InfoCardGrid items={values} columns={3} />
      </ContentSection>

      <ContentSection
        eyebrow={t("about.approach.eyebrow")}
        title={t("about.approach.title")}
        description={t("about.approach.description")}
      >
        <InfoCardGrid items={approach} columns={3} />
      </ContentSection>

      <CTASection />
    </>
  );
}
