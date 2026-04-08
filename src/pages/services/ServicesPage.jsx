import { useTranslation } from "react-i18next";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import PageHero from "../../components/layout/pageHero/PageHero";
import PageIntro from "../../components/common/pageIntro/PageIntro";
import ContentSection from "../../components/common/contentSection/ContentSection";
import InfoCardGrid from "../../components/common/infoCardGrid/InfoCardGrid";
import CTASection from "../../components/sections/ctaSection/CtaSection";
import { services } from "../../data/services";
import { serviceBenefits, serviceProcess } from "../../data/servicesPage";

export default function ServicesPage() {
  const { t } = useTranslation();

  useDocumentTitle(`${t("meta.services")} | SIMENOVA`);

  const serviceItems = services.map((item) => ({
    id: item.id,
    title: t(item.titleKey),
    description: t(item.descriptionKey),
  }));

  const benefits = serviceBenefits.map((item) => ({
    id: item.id,
    title: t(item.titleKey),
    description: t(item.descriptionKey),
  }));

  const process = serviceProcess.map((item) => ({
    id: item.id,
    title: t(item.titleKey),
    description: t(item.descriptionKey),
  }));

  return (
    <>
      <PageHero
        eyebrow={t("servicesPage.hero.eyebrow")}
        title={t("servicesPage.hero.title")}
        description={t("servicesPage.hero.description")}
      />

      <PageIntro
        title={t("servicesPage.intro.title")}
        description={t("servicesPage.intro.description")}
      />

      <ContentSection
        eyebrow={t("servicesPage.offer.eyebrow")}
        title={t("servicesPage.offer.title")}
        description={t("servicesPage.offer.description")}
        background="light"
      >
        <InfoCardGrid items={serviceItems} columns={3} />
      </ContentSection>

      <ContentSection
        eyebrow={t("servicesPage.benefits.eyebrow")}
        title={t("servicesPage.benefits.title")}
        description={t("servicesPage.benefits.description")}
      >
        <InfoCardGrid items={benefits} columns={3} />
      </ContentSection>

      <ContentSection
        eyebrow={t("servicesPage.process.eyebrow")}
        title={t("servicesPage.process.title")}
        description={t("servicesPage.process.description")}
        background="light"
      >
        <InfoCardGrid items={process} columns={3} />
      </ContentSection>

      <CTASection />
    </>
  );
}
