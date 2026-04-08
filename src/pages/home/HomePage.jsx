import { useTranslation } from "react-i18next";
import Seo from "../../components/common/seo/Seo";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Hero from "../../components/sections/hero/Hero";
import TrustStrip from "../../components/sections/trustStrip/TrustStrip";
import AboutPreview from "../../components/sections/aboutPreview/AboutPreview";
import ServicesPreview from "../../components/sections/servicesPreview/ServicesPreview";
import WhyChooseUs from "../../components/sections/whyChooseUs/WhyChooseUs";
import CaseStudiesPreview from "../../components/sections/caseStudiesPreview/CaseStudiesPreview";
import TeamPreview from "../../components/sections/teamPreview/TeamPreview";
import Testimonials from "../../components/sections/testimonials/Testimonials";
import BlogPreview from "../../components/sections/blogPreview/BlogPreview";
import CTASection from "../../components/sections/ctaSection/CtaSection";

export default function HomePage() {
  const { t } = useTranslation();

  useDocumentTitle(`${t("meta.home")} | SIMENOVA`);

  return (
    <>
      <Seo
        title={t("meta.home")}
        description={t("seo.home.description")}
        path="/"
      />

      <Hero />
      <TrustStrip />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <CaseStudiesPreview />
      <TeamPreview />
      <Testimonials />
      <BlogPreview />
      <CTASection />
    </>
  );
}
